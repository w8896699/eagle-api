// var makeInstructions = require('@bit/eao.epic.comment-period-business-logic');
var mongoose = require('mongoose');
var Mixed = mongoose.Schema.Types.Mixed;

var definition = {
    additionalText       : { type: String, default: '' },
    ceaaAdditionalText   : { type: String, default: '' },
    ceaaInformationLabel : { type: String, default: '' },
    ceaaRelatedDocuments : { type: String, default: '' },
    classificationRoles  : [{ type: String, default: '' }],
    classifiedPercent    : { type: Number, default: '' },
    commenterRoles       : [{ type: String, default: '' }],
    dateAdded            : { type: Date, default: '' },
    dateCompleted        : { type: Date, default: '' },
    dateCompletedEst     : { type: Date, default: '' },
    dateStarted          : { type: Date, default: '' },
    dateStartedEst       : { type: Date, default: '' },
    dateUpdated          : { type: Date, default: '' },
    description          : { type: String, default: '' },
    downloadRoles        : [{ type: String, default: '' }],
    informationLabel     : { type: String, default: '' },
    informationForComment: { type: String, default: '' },
    isClassified         : { type: Boolean, default: '' },
    isPublished          : { type: Boolean, default: '' },
    isResolved           : { type: Boolean, default: '' },
    isVetted             : { type: String, default: '' },
    milestone            : { type: 'ObjectId', ref: 'Milestone', default: null, index: true },
    openHouses           : [{ type: Mixed, default: {} }],
    periodType           : { type: String, default: '' },
    phase                : { type: String, default: '' },
    phaseName            : { type: String, default: '' },
    project              : { type: 'ObjectId', ref: 'Project', default: null, index: true },
    publishedPercent     : { type: Number, default: '' },
    rangeOption          : { type: String, default: '' },
    rangeType            : { type: String, default: '' },
    relatedDocuments     : [{ type: String, default: '' }],
    resolvedPercent      : { type: Number, default: '' },
    userCan              : { type: String, default: '' },
    vettedPercent        : { type: Number, default: '' },
    vettingRoles         : [{ type: String, default: '' }],
    commentIdCount       : { type: Number, default: 0 },

    // Permissions
    read                : [{ type: String, trim: true, default: 'sysadmin' }],
    write               : [{ type: String, trim: true, default: 'sysadmin' }],
    delete              : [{ type: String, trim: true, default: 'sysadmin' }]
};
var instruction = {};
instruction.name = 'instruction';
instruction.get = function () {
        // var instruction = makeInstructions.combineText(this.informationForComment, this.description,this.project);
        // todo add in the project name;
        this.textInfo = 'Comment Period on the '+ this.informationForComment + ' for ' + this.project + '.' + '\n' + this.description;
        console.log('babababababababa', this.textInfo);
        return this.textInfo;
        };
instruction.set = function (instruction) {
        this.set(instruction);
    };

definition.virtuals__ = [instruction];

module.exports = require ('../models')('CommentPeriod', definition, 'epic');

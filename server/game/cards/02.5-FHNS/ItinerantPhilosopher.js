const DrawCard = require('../../drawcard.js');
const { Players, CardTypes } = require('../../Constants');

class ItinerantPhilosopher extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Bow a character',
            condition: context => context.source.isParticipating(),
            cost: ability.costs.discardImperialFavor(),
            target: {
                cardType: CardTypes.Character,
                controller: Players.Opponent,
                cardCondition: card => card.isParticipating() && card.attachments.size() > 0,
                gameAction: ability.actions.bow()
            }
        });
    }
}

ItinerantPhilosopher.id = 'itinerant-philosopher';

module.exports = ItinerantPhilosopher;

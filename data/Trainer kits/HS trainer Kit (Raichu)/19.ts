import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		en: "Raichu",
		fr: "Raichu"
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "If the electric pouches in its cheeks become fully charged, both ears will stand straight up."
	},
	

	types: ["Lightning",],

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Iron Tail",
			fr: "Queue de fer"
		},

		damage: "30×",

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce qu'elle tombe sur pile. Cette carte inflige 30 dégâts multipliés par le nombre de faces."
		}
	}, {
		name: {
			en: "Thunderbolt",
			fr: "Tonnerre"
		},

		damage: 100,

		effect: {
			en: "Discard all Energy attached to Raichu.",
			fr: "Défaussez toutes les cartes Énergie attachées à Raichu."
		}
	}],

	thirdParty: {
		tcgplayer: 88520
	}
}

export default card
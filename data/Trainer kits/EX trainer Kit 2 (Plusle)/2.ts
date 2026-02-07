import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [309],
	set: Set,

	name: {
		en: "Electrike",
		fr: "Dynavolt"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Lightning",
	],

	attacks: [{
		cost: [
			"Lightning",
		],
		name: {
			en: "Recharge",
			fr: "Recharger"
		},
		effect: {
			en: "Search your deck for a Lightning Energy card and attach it to Electrike. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck 1 carte Énergie  et attachez-la à Dynavolt. Ensuite, mélangez votre deck."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-attaque"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires."
		},
		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 85136
	}
}

export default card

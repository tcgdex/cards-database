import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Sandaconda",
		fr: "Dunaconda"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Silicobra",
		fr: "Dunaja"
	},

	attacks: [{
		name: {
			en: "Big Sand Cannon",
			fr: "Gros Canon Sableux"
		},

		effect: {
			en: "Discard the top 6 cards of your deck. This attack does 60 damage for each Fighting Energy card you discarded in this way.",
			fr: "Défaussez les 6 cartes du dessus de votre deck. Cette attaque inflige 60 dégâts pour chaque carte Énergie Fighting défaussée de cette façon."
		},

		damage: "60×",
		cost: ["Fighting"]
	}, {
		name: {
			en: "Skull Bash",
			fr: "Coud’Krâne"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card
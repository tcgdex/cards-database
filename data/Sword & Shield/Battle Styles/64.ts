import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Dottler",
		fr: "Coléodôme"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		en: "Blipbug",
		fr: "Larvadar"
	},

	attacks: [{
		name: {
			en: "Radar",
			fr: "Radar"
		},

		effect: {
			en: "Look at the top 4 cards of your deck and put them back in any order.",
			fr: "Regardez les 4 cartes du dessus de votre deck, puis replacez-les dans l’ordre de votre choix."
		},

		cost: ["Psychic"]
	}, {
		name: {
			en: "Ram",
			fr: "Collision"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card
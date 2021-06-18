import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Sirfetch’d",
		fr: "Palarticho de Galar"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Galarian Farfetch’d",
		fr: "Canarticho de Galar"
	},

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Leek Strike",
			fr: "Coup de Poireau"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 90 more damage, and this attack’s damage isn’t affected by Resistance.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires et les dégâts de cette attaque ne sont pas affectés par la Résistance."
		},

		damage: "70+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card
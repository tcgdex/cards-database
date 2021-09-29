import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Seleroc",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		337,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Lunar Blast",
				fr: "Explosion lunaire",
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Selfdestruct",
				fr: "Destruction",
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (both yours and your opponent’s). (Don’t apply Weakness and Resistance for Benched Pokémon.) Lunatone does 60 damage to itself.",
				fr: "Cette attaque inflige 10 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).(N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Seleroc s’inflige 60 dégâts.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It was discovered at the site of a meteor strike 40 years ago. Its stare can lull its foes to sleep."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card

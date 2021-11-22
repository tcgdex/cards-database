import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Mawile EX",
		fr: "M-Mysdibule EX",
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		303,
	],

	hp: 190,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Mawile-EX",
		fr: "Mysdibule-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Twin Grapple",
				fr: "Lutte Duo",
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,
	suffix: "EX"
}

export default card

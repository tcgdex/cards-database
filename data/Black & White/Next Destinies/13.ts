import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		de: "Arkani"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280237
	}
}

export default card

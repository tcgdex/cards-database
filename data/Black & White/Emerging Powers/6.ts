import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Swadloon",
		fr: "Couverdure",
		es: "Swadloon",
		it: "Swadloon",
		pt: "Swadloon",
		de: "Folikon"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		541,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
		de: "Strawickl"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Grass Cocooning",
				fr: "Cocon Vert",
				de: "Pflanzenhülle"
			},
			effect: {
				en: "Heal 40 damage from this Pokémon.",
				fr: "Soignez 40 dégâts à ce Pokémon.",
				de: "Heile 40 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
				de: "Rasierblatt"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Forests where Swadloon live have superb foliage because the nutrients they make from fallen leaves nourish the plant life.",
		de: "Es wandelt herabgefallenes Laub in Nährstoffe um. In Wäldern, wo es Folikon gibt, fühlen sich Pflanzen pudelwohl."
	},

	thirdParty: {
		cardmarket: 279970,
		tcgplayer: 89666
	}
}

export default card

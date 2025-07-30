import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Leavanny",
		fr: "Manternel",
		es: "Leavanny",
		it: "Leavanny",
		pt: "Leavanny",
		de: "Matrifol"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		542,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cleave",
				fr: "Frappe Adhésive",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, défaussez toutes les Énergies attachées au Pokémon Défenseur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Blade",
				fr: "Lame-Feuille",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280750,
		tcgplayer: 86688
	}
}

export default card

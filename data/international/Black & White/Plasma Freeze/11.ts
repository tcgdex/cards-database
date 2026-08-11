import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali",
		'es-es': "Leafeon",
		'it-it': "Leafeon",
		'pt-br': "Leafeon",
		'de-de': "Folipurba"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		470,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Crush",
				'fr-fr': "Écras'Énergie",
			},
			effect: {
				'en-us': "Does 20 damage times the amount of Energy attached to all of your opponent's Pokémon.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous les Pokémon de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Blade",
				'fr-fr': "Lame-Feuille",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "With cells similar to those of plants, it performs photosynthesis inside its body and creates pure air.",
	},

	thirdParty: {
		cardmarket: 280889,
		tcgplayer: 86683
	}
}

export default card

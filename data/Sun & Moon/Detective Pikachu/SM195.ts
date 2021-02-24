import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		fr: "Dracaufeu-GX",
	},
	illustrator: "Framestore",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 250,
	types: [
		"Fire",
	],
	evolveFrom: {
		fr: "Reptincel",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Destruction Enragée",
			},
			effect: {
				fr: "Défaussez les 8 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à ce Pokémon.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Artillerie Vapeur",
			},

			damage: 200,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Flammes Effroyables-GX",
			},
			effect: {
				fr: "Défaussez une Énergie de chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 250,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card

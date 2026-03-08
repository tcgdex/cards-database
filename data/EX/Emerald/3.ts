import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Exploud",
		fr: "Brouhabam",
		de: "Krawumms"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		295,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner",
				de: "Collect"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				de: "Draw 3 cards."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Body Slam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
				fr: "Mégaphone",
				de: "Hyper Voice"
			},

			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Throw",
				fr: "Méga lancer",
				de: "Mega Throw"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 60 damage plus 40 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 60 dégâts plus 40 dégâts supplémentaires.",
				de: "If the Defending Pokémon is Pokémon-ex, this attack does 60 damage plus 40 more damage."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 85371,
		cardmarket: 276514
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			stamp: ["national-championships"]
		},
		{
			type: "holo",
			stamp: ["national-championships", "staff"]
		}
	]
}

export default card

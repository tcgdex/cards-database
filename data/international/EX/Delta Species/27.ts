import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Sandslash δ",
		'fr-fr': "Sablaireau δ",
		'de-de': "Sandamer"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 80,

	types: [
		"Fighting",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Delta Storm",
				'fr-fr': "Tempête Delta",
				'de-de': "Delta-Sturm"
			},
			effect: {
				'en-us': "As long as Sandslash is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon-ex between turns.",
				'fr-fr': "Tant que Sablaireau est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon-ex de votre adversaire entre deux tours.",
				'de-de': "Solange Sandamer dein Aktives Pokémon ist, lege zwischen den Zügen eine Schadensmarke auf alle Pokémon-ex deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rend",
				'fr-fr': "Déchirer",
				'de-de': "Reißer"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn bereits Schadensmarken auf dem Verteidigenden Pokémon liegen, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276790
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card


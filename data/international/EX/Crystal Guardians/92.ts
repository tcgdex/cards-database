import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Exploud ex",
		'fr-fr': "Brouhabam ex",
		'de-de': "Krawumms ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		295,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Extra Noise",
				'fr-fr': "Bruit supplémentaire",
				'de-de': "Extralärm"
			},
			effect: {
				'en-us': "As long as Exploud ex is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon-ex between turns.",
				'fr-fr': "Tant que Brouhabam ex est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon-ex de votre adversaire entre deux tours.",
				'de-de': "Solange Krawumms ex dein Aktives Pokémon ist, lege nach dem Zug jedes Spielers 1 Schadensmarke auf jedes Pokémon-ex deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Derail",
				'fr-fr': "Dérailler",
				'de-de': "Entgleisen"
			},
			effect: {
				'en-us': "Discard a Special Energy card, if any, attached to the Defending Pokémon.",
				'fr-fr': "Défaussez 1 carte Énergie Spéciale attachée au Pokémon Défenseur, s'il en a.",
				'de-de': "Lege 1 Spezialenergiekarte, die an das Verteidigende Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Tail",
				'fr-fr': "Hyper-queue",
				'de-de': "Hyperschweif"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, this attack does 60 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède des Poké-Powers ou des Poké-Bodies, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon Poké-Power oder Poké-Body hat, fügt dieser Angriff 60 Schadenspunkte plus 20 weitere Schadenspunkte zu."
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


	retreat: 3,

	thirdParty: {
		cardmarket: 277173,
		tcgplayer: 85375
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card

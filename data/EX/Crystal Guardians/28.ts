import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre",
		de: "Bisaflor"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Chlorophyll",
				fr: "Chlorophyle",
				de: "Chlorophyll"
			},
			effect: {
				en: "All Energy cards that provide only Colorless Energy attached to your Grass Pokémon provide Grass Energy instead.",
				fr: "Toutes les cartes Énergie fournissant uniquement de l'Énergie  attachées à vos Pokémon  fournissent de l'Énergie .",
				de: "Alle Energiekarten, die nur -Energie liefern und an deine Pokémon vom Typ  angelegt sind, liefern stattdessen -Energie."
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
				en: "Green Blast",
				fr: "Explosion verte",
				de: "Naturstoß"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à tous vos Pokémon.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede an deine Pokémon angelegte -Energie zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Toxic Sleep",
				fr: "Dodo toxik",
				de: "Toxischer Schlaf"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
				de: "Das Verteidigende Pokémon schläft jetzt und ist vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das Verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 277109,
		tcgplayer: 90318
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["regional-championships"]
		}
	]
}

export default card

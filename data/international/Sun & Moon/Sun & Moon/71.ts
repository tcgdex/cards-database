import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Gigalith",
		'fr-fr': "Gigalithe",
		'es-es': "Gigalith",
		'it-it': "Gigalith",
		'pt-br': "Gigalith",
		'de-de': "Brockoloss"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		526,
	],

	hp: 160,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Boldore",
		'fr-fr': "Géolithe",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Artillery",
				'fr-fr': "Artillerie Roche",
				'es-es': "Artillería de Rocas",
				'it-it': "Artiglieria Roccia",
				'pt-br': "Artilharia de Pedra",
				'de-de': "Felsartillerie"
			},
			effect: {
				'en-us': "Discard any amount of Fighting Energy from your Pokémon. This attack does 50 damage for each card you discarded in this way.",
				'fr-fr': "Défaussez n’importe quel nombre d’Énergies Fighting de vos Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta cualquier cantidad de Energías Fighting de tus Pokémon. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta tutte le Energie Fighting che vuoi assegnate ai tuoi Pokémon. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte qualquer quantidade de Energia Fighting dos seus Pokémon. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
				'de-de': "Lege beliebig viele Fighting-Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Tumble",
				'fr-fr': "Roule-Pierre",
				'es-es': "Avalancha de Rocas",
				'it-it': "Tiramassi",
				'pt-br': "Desabamento de Pedras",
				'de-de': "Rollende Felsen"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Known for its hefty horsepower, this Pokémon is a popular partner for construction workers.",
	},

	thirdParty: {
		cardmarket: 295382,
		tcgplayer: 126942
	}
}

export default card

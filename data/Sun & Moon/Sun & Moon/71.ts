import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Gigalith",
		fr: "Gigalithe",
		es: "Gigalith",
		it: "Gigalith",
		pt: "Gigalith",
		de: "Brockoloss"
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
		en: "Boldore",
		fr: "Géolithe",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Artillery",
				fr: "Artillerie Roche",
				es: "Artillería de Rocas",
				it: "Artiglieria Roccia",
				pt: "Artilharia de Pedra",
				de: "Felsartillerie"
			},
			effect: {
				en: "Discard any amount of Fighting Energy from your Pokémon. This attack does 50 damage for each card you discarded in this way.",
				fr: "Défaussez n’importe quel nombre d’Énergies Fighting de vos Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta cualquier cantidad de Energías Fighting de tus Pokémon. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta tutte le Energie Fighting che vuoi assegnate ai tuoi Pokémon. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte qualquer quantidade de Energia Fighting dos seus Pokémon. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
				de: "Lege beliebig viele Fighting-Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
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
				en: "Rock Tumble",
				fr: "Roule-Pierre",
				es: "Avalancha de Rocas",
				it: "Tiramassi",
				pt: "Desabamento de Pedras",
				de: "Rollende Felsen"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
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

	thirdParty: {
		cardmarket: 295382,
		tcgplayer: 126942
	}
}

export default card

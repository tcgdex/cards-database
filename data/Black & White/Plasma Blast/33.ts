import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
		es: "Eelektross",
		it: "Eelektross",
		pt: "Eelektross",
		de: "Zapplarang"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		604,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
		de: "Zapplalek"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Crush and Burn",
				fr: "Écra-Brûle",
				de: "Falten und Frittieren"
			},
			effect: {
				en: "Discard as many Energy attached to your Pokémon as you like. This attack does 30 damage times the number of Energy cards you discarded.",
				fr: "Défaussez autant d'Énergies attachées à vos Pokémon que vous voulez. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
				de: "Lege beliebig viele an deine Pokémon angelegte Energien auf deinen Ablagestapel. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder Tempest",
				fr: "Tempête Foudre",
				de: "Donnersturm"
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It latches on to prey with its sucker mouth, sinking in its fangs and shocking the prey with powerful electricity.",
		de: "Es hakt sich mit dem Saugnapf an seinem Maul am Gegner fest und verpasst ihm mit seinen Fangzähnen starke Stromschläge."
	},

	thirdParty: {
		cardmarket: 281054,
		tcgplayer: 85072
	}
}

export default card

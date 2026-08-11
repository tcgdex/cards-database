import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoké",
		'de-de': "Woingenau"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Stages of Evolution",
				'fr-fr': "Niveaux d'Évolution",
				'de-de': "Stufen der Evolution"
			},
			effect: {
				'en-us': "As long as Wobbuffet is an Evolved Pokémon, your opponent pays Colorless more to retreat his or her Active Pokémon.",
				'fr-fr': "Tant que Qulbutoké est un Pokémon Évolué, votre adversaire paye un  supplémentaire pour faire battre en retraite son Pokémon Actif.",
				'de-de': "Solange Woingenau ein entwickeltes Pokémon ist, muss dein Gegner zusätzlich 1  bezahlen, wenn er sein Aktives Pokémon zurückziehen will."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Grind",
				'fr-fr': "Écrase",
				'de-de': "Zermalmen"
			},
			effect: {
				'en-us': "Does 10 damage times the amount of Energy attached to Wobbuffet.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Qulbutoké.",
				'de-de': "Dieser Angriff fügt für jede an Woingenau angelegte Energie 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Tag",
				'fr-fr': "Marque d'ombre",
				'de-de': "Wegsperre"
			},
			effect: {
				'en-us': "Put 7 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
				'fr-fr': "Placez 7 marqueurs de dégât sur le Pokémon Défenseur à la fin du prochain tour de votre adversaire.",
				'de-de': "Lege am Ende des nächsten Zuges deines Gegners 7 Schadensmarken auf das Verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276905,
		tcgplayer: 90616
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

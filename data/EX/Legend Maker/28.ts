import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
		de: "Woingenau"
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
				en: "Stages of Evolution",
				fr: "Niveaux d'Évolution",
				de: "Stufen der Evolution"
			},
			effect: {
				en: "As long as Wobbuffet is an Evolved Pokémon, your opponent pays Colorless more to retreat his or her Active Pokémon.",
				fr: "Tant que Qulbutoké est un Pokémon Évolué, votre adversaire paye un  supplémentaire pour faire battre en retraite son Pokémon Actif.",
				de: "Solange Woingenau ein entwickeltes Pokémon ist, muss dein Gegner zusätzlich 1  bezahlen, wenn er sein Aktives Pokémon zurückziehen will."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase",
				de: "Zermalmen"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Wobbuffet.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Qulbutoké.",
				de: "Dieser Angriff fügt für jede an Woingenau angelegte Energie 10 Schadenspunkte zu."
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
				en: "Shadow Tag",
				fr: "Marque d'ombre",
				de: "Wegsperre"
			},
			effect: {
				en: "Put 7 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
				fr: "Placez 7 marqueurs de dégât sur le Pokémon Défenseur à la fin du prochain tour de votre adversaire.",
				de: "Lege am Ende des nächsten Zuges deines Gegners 7 Schadensmarken auf das Verteidigende Pokémon."
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

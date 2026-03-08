import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Kingdra ex δ",
		fr: "Hyporoi ex δ",
		de: "Seedraking ex"
	},

	illustrator: "Masahiko Ishii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extra Smoke",
				fr: "Extra fumée",
				de: "Extra-Rauch"
			},
			effect: {
				en: "Any damage done to your Stage 2 Pokémon-ex by your opponent's attacks is reduced by 10 (before applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à vos Pokémon-ex de Niveau 2 par des attaques de votre adversaire sont réduits de 10 (avant application de la Faiblesse et de la Résistance).",
				de: "Jeder Schaden, der deinen Pokémon-ex der Phase 2 durch gegnerische Angriffe zugefügt wird, wird um 10 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
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
				en: "Energy Link",
				fr: "Chaîne d'énergie",
				de: "Energie-Verbindung"
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Kingdra ex.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie et attachez-la à Hyporoi ex.",
				de: "Durchsuche deinen Ablagestapel nach 1 Energiekarte und lege sie an Seedraking ex an."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Protective Swirl",
				fr: "Tourbillon protecteur",
				de: "Schutzwirbel"
			},
			effect: {
				en: "Kingdra ex has no Weakness during your opponent's next turn.",
				fr: "Hyporoi ex ne possède pas de Faiblesse lors du prochain tour de votre adversaire.",
				de: "Seedraking ex hat während des nächsten Zuges deines Gegners keine Schwäche."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277299
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card

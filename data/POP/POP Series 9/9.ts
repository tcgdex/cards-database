import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Lopunny",
		fr: "Lockpin",
		de: "Schlapor"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [428],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
		de: "Haspiror"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jump Kick",
				fr: "Pied Saute",
				de: "Sprungkick"
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jazzed",
				fr: "Plein d'entrain",
				de: "Aufgeregt"
			},
			effect: {
				en: "If Lopunny evolved from Buneary during this turn, remove all damage counters from Lopunny.",
				fr: "Si Lockpin évolue de Laporeille lors de ce tour, retirez à Lockpin tous ses marqueurs de dégât.",
				de: "Wenn sich Schlapor in diesem Zug aus Haspiror entwickelt hat, entferne alle Schadensmarken von Schlapor."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		en: "It is very conscious of its looks and never fails to groom its ears. It runs with sprightly jumps.",
		fr: "Il est très coquet et n'oublie jamais de toiletter ses oreilles. Il avance en bonds énergiques.",
		de: "Es ist sehr bedacht auf sein Äußeres und vergisst nie, seine Ohren zu kämmen."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86825,
				cardmarket: 278560
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86825,
				cardmarket: 278560
			},
		},
	],

}

export default card

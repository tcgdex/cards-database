import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Kingdra ex δ",
		fr: "Hyporoi ex δ"
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
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extra Smoke",
				fr: "Extra fumée"
			},
			effect: {
				en: "Any damage done to your Stage 2 Pokémon-ex by your opponent's attacks is reduced by 10 (before applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à vos Pokémon-ex de Niveau 2 par des attaques de votre adversaire sont réduits de 10 (avant application de la Faiblesse et de la Résistance)."
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
				fr: "Chaîne d'énergie"
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Kingdra ex.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie et attachez-la à Hyporoi ex."
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
				fr: "Tourbillon protecteur"
			},
			effect: {
				en: "Kingdra ex has no Weakness during your opponent's next turn.",
				fr: "Hyporoi ex ne possède pas de Faiblesse lors du prochain tour de votre adversaire."
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





}

export default card

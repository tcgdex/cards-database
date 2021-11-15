import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Gardevoir δ",
		fr: "Gardevoir δ ESPÈCES DELTA"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 100,
	types: [
		"Psychic",
		"Metal",
	],
	evolveFrom: {
		en: "Kirlia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Jump",
				fr: "Saute énergie"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move an Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Psychic Rage",
				fr: "Frénésie psychique"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each damage counter on Gardevoir to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Gardevoir. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Black Magic",
				fr: "Magie noire"
			},
			effect: {
				en: "Does 10 damage plus 20 more damage times the number of your opponent's Benched Pokémon.",
				fr: "Inflige 10 dégâts plus 20 dégâts supplémentaires multipliés par le nombre de Pokémon sur le Banc de votre adversaire."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card

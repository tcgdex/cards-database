import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		321,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wailmer",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Lift",
				fr: "Ascension réactive"
			},
			effect: {
				en: "As long as Wailord has any React Energy cards attached to it, the Retreat Cost for each of your Water Pokémon (excluding Pokémon-ex) is 0.",
				fr: "Tant que Wailord possède des cartes Énergie réaction, le Coût de retraite de chacun de vos Pokémon  (Pokémon-ex exclus) est de 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hypno Splash",
				fr: "Hypnoplouf"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rely on Friends",
				fr: "Compter sur les amis"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each of your Benched Stage 1 Evolved Pokémon.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chacun de vos Pokémon Évolués de niveau 1 sur votre Banc."
			},
			damage: "40+",

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

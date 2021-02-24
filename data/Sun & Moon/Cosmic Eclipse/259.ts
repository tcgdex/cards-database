import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Reshiram & Zekrom-GX",
		fr: "Reshiram et Zekrom-GX",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		643,
	],
	hp: 270,
	types: [
		"Dragon",
	],

	stage: "Basic",
	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Fabled Flarebolts",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "Discard up to 3 in any combination of basic {R} and basic {L} Energy cards from your Benched Pokémon. This attack does 90 damage for each card you discarded in this way.",
			},
			damage: 90,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Cross Break GX",
				fr: "Flamme-Foudre Fabuleuse",
			},
			effect: {
				en: "This attack does 170 damage to 1 of your opponent's Benched Pokémon. If you played N's Resolve from your hand during this turn, this attack also does 170 damage to 1 of your opponent's other Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez une combinaison d’un maximum de 3 cartes Énergie Fire de base et Énergie Lightning de base de vos Pokémon de Banc. Cette attaque inflige 90 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: "90×",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Lightning",
			],
			name: {
				fr: "Fracture Croisée-GX",
			},
			effect: {
				fr: "Cette attaque inflige 170 dégâts à l’un des Pokémon de Banc de votre adversaire. Si vous avez joué Résolution de N de votre main pendant ce tour, cette attaque inflige également 170 dégâts à l’un des autres Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card

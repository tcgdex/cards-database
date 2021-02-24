import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Flame",
				fr: "Flamme évolutive",
			},
			effect: {
				en: "Once during your turn, when you play Magmortar from your hand to evolve 1 of your Pokémon, you may use this power. Your opponent's Active Pokémon is now Burned and Confused.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Maganon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez utiliser ce pouvoir. Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Arrow",
				fr: "Flèche de feu",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Ball",
				fr: "Boule de feu",
			},
			effect: {
				en: "You may move a Fire Energy card attached to Magmortar to 1 of your Benched Pokémon.",
				fr: "Vous pouvez déplacer une carte Énergie Fire attachée à Maganon sur 1 de vos Pokémon de Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card

import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Umbreon ex",
		fr: "Noctali ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Darker Ring",
				fr: "Cercle plus sombre"
			},
			effect: {
				en: "Once during your turn (before your attack), when you play Umbreon ex from your hand to evolve 1 of your Pokémon, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Noctali ex de votre main pour faire évoluer 1 de vos Pokémon, échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Black Cry",
				fr: "Cri noir"
			},
			effect: {
				en: "The Defending Pokémon can't retreat or use any Poké-Powers during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite ou utiliser de Poké-Powers lors du prochain tour de votre adversaire."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Darkness Fang",
				fr: "Croc obscur"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card

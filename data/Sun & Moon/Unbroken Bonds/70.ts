import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
	},
	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Pain",
				fr: "Douleur Ombre",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 6 damage counters on your opponent's Pokémon-GX and Pokémon-EX in any way you like.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 6 marqueurs de dégâts sur les Pokémon-GX et Pokémon-EX de votre adversaire, de la manière que vous voulez.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twilight Poison",
				fr: "Poison Nocturne",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card

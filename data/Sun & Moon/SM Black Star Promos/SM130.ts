import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Élecsprint",
	},
	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		310,
	],
	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Electric Start",
				fr: "Démarrage Électrique",
			},
			effect: {
				en: "If you go second, and if this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon or on your Bench.",
				fr: "Si vous jouez en second et que ce Pokémon est dans votre main lorsque vous vous apprêtez à jouer, vous pouvez le placer, face cachée, en tant que Pokémon Actif ou Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Double Charge",
				fr: "Charge Dupliquée",
			},
			effect: {
				en: "You may attach up to 2 basic Energy cards from your hand to 1 of your Benched Pokémon.",
				fr: "Vous pouvez attacher jusqu’à 2 cartes Énergie de base de votre main à l’un de vos Pokémon de Banc.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card

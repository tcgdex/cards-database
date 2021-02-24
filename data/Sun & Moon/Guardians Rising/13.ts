import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		609,
	],
	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shady Move",
				fr: "Déplacement Louche",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move 1 damage counter from 1 Pokémon to another Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer un marqueur de dégâts de l’un de vos Pokémon vers un autre.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Super Singe",
				fr: "Super Roussi",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card

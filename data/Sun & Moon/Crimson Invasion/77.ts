import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		784,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "War Cry",
				fr: "Cri de Guerre",
			},
			effect: {
				en: "If you have fewer Pokémon in play than your opponent, this attack does 90 more damage.",
				fr: "S’il vous reste moins de Pokémon en jeu que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Clanging Scales",
				fr: "Vibrécaille",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 30 more damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card

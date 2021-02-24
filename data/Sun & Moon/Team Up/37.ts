import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Golem",
		fr: "Grolem d’Alola",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		76,
	],
	hp: 180,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},
	stage: "Stage2",


	attacks: [
		{

			name: {
				en: "Electromagnetic Bomb",
				fr: "Bombe Électromagnétique",
			},
			effect: {
				en: "Move any number of Lightning Energy from your Benched Pokémon to this Pokémon. This attack does 20 damage for each Energy card you moved in this way.",
				fr: "Déplacez autant d’Énergies Lightning que vous voulez de vos Pokémon de Banc vers ce Pokémon. Cette attaque inflige 20 dégâts pour chaque carte Énergie déplacée de cette façon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Zap Cannon",
				fr: "Super Élecanon",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
			},
			damage: 190,

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
	retreat: 4,



}

export default card

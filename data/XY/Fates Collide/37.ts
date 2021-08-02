import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bodyguard",
				fr: "Garde du Corps",
			},
			effect: {
				en: "Prevent all effects of attacks done to you or your hand by your opponent’s Pokémon. Remove any existing effects.",
				fr: "Évitez tous les effets d'attaques infligés à vous-même ou à votre main par les Pokémon de votre adversaire. Retirez tous les effets déjà en action.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Bonemerang",
				fr: "Osmerang",
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "60×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card

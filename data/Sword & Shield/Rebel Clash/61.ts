import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Luxio",
	},
	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Shinx",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Top Entry",
			},
			effect: {
				en: "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Zap Kick",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card

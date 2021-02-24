import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Lopunny",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		428,
	],

	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Buneary",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Relaxing Shower",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard an Energy card from your hand. If you do, remove 1 damage counter from each of your Pokémon. This power can't be used if Lopunny is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hover Heal",
			},
			effect: {
				en: "Remove all Special Conditions from Lopunny.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card

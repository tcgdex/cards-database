import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Sharpedo",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		319,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Carvanha",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rough Skin",
			},
			effect: {
				en: "If Sharpedo is your Active Pokémon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Slash",
			},
			effect: {
				en: "You may discard a Darkness Energy card attached to Sharpedo. If you do, this attack does 40 damage plus 30 more damage.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card

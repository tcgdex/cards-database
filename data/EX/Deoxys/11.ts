import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Metagross",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Metang",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Super Connectivity",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a Psychic or Metal Energy card and attach it to your Active Pokémon. Then, put 1 damage counter on that Pokémon. This power can't be used if Metagross is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Link Blast",
			},
			effect: {
				en: "If Metagross and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 40 instead of 70.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card

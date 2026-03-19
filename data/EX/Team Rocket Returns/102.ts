import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Scyther ex",
		de: "Rockets Sichlor ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
				de: "Dual Armor"
			},
			effect: {
				en: "As long as Rocket's Scyther ex has any Grass Energy attached to it, Rocket's Scyther ex is both Grass and Darkness type.\"",
				de: "As long as Rocket's Scyther ex has any  Energy attached to it, Rocket's Scyther ex is both  and  type."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bounce",
				de: "Bounce"
			},
			effect: {
				en: "After your attack, you may switch Rocket's Scyther ex with 1 of your Benched Pokémon.",
				de: "After your attack, you may switch Rocket's Scyther ex with 1 of your Benched Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				de: "Slashing Strike"
			},
			effect: {
				en: "Rocket's Scyther ex can't use Slashing Strike during your next turn.",
				de: "Rocket's Scyther ex can't use Slashing Strike during your next turn."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276394,
		tcgplayer: 88789
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card

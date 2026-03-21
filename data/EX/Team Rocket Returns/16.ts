import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Muk",
		de: "Dunkles Sleimok"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 70,

	types: [
		"Grass",
		"Darkness",
	],

	evolveFrom: {
		en: "Grimer",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sticky Goo",
				de: "Sticky Goo"
			},
			effect: {
				en: "As long as Dark Muk is your Active Pokémon, your opponent pays ColorlessColorless more to retreat his or her Active Pokémon.\"",
				de: "As long as Dark Muk is your Active Pokémon, your opponent pays  more to retreat his or her Active Pokémon."
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
				en: "Slimy Water",
				de: "Slimy Water"
			},
			effect: {
				en: "Does 10 damage times the number of Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).\"",
				de: "Does 10 damage times the number of  Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost)."
			},
			damage: "10x",

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Acidic Poison",
				de: "Acidic Poison"
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Poisoned.",
				de: "The Defending Pokémon is now Burned and Poisoned."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276308,
		tcgplayer: 84631
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

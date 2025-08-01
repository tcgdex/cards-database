import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Pidgeotto",
		de: "Tauboga"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		17,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pidgey",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				de: "Windstoß"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twister",
				de: "Windhose"
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
				de: "Wirf 2 Münzen. Wenn beide Münzen \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen. Lege pro \"Kopf\" eine Energie, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 279691,
		tcgplayer: 88043
	}
}

export default card

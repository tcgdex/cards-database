import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Wormadam Trash Cloak",
		de: "Burmadame Lumpenumhang"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],
	
	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Burmy Trash Cloak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Cloak Shard",
				de: "Umhang-Scherbe"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. If you have Wormadam Plant Cloak in play, this attack does 40 damage to that Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte zu. Wenn du Burmadame Pflanzenumhang im Spiel hast, fügt dieser Angriff stattdessen dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Serve Trash",
				de: "Müll servieren"
			},
			effect: {
				en: "You may search your opponent's discard pile for any 1 card, show it to your opponent, and put it on top of his or her deck.",
				de: "Du kannst den Ablagestapel deines Gegners nach 1 beliebigen Karte durchsuchen, sie deinem Gegner zeigen und oben auf sein Deck legen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278923,
		tcgplayer: 90646
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card

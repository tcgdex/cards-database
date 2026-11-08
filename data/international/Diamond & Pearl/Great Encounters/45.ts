import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'de-de': "Magcargo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Magma Armor",
				'fr-fr': "Magmascudo",
				'de-de': "Magmapanzer"
			},
			effect: {
				'en-us': "Magcargo can't be Asleep or Paralyzed.",
				'fr-fr': "Volcaropod ne peut pas être Endormi ou Paralysé.",
				'de-de': "Magcargo kann nicht schlafen oder gelähmt sein."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Lava Plume",
				'fr-fr': "Ébullilave",
				'de-de': "Flammensturm"
			},
			effect: {
				'en-us': "You may discard the top card of your deck. If you do, the Defending Pokémon is now Burned.",
				'fr-fr': "Vous pouvez défausser la carte du dessus de votre deck. Le Pokémon Défenseur est alors Brûlé.",
				'de-de': "Du kannst die oberste Karte deines Decks auf deinen Ablagestapel legen. Wenn du das machst, ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its body temperature is roughly 18,000 degrees F. Flames spout from gaps in its hardened shell.",
	},

	thirdParty: {
		cardmarket: 277947,
		tcgplayer: 87016
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card

import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Mewtwo",
		'fr-fr': "Mewtwo",
		'de-de': "Mewtu"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Psybarrier",
				'fr-fr': "Barrage psy",
				'de-de': "Psybarriere"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Mewtwo by your opponent's Pokémon that isn't an Evolved Pokémon.",
				'fr-fr': "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Mewtwo par un Pokémon de votre adversaire n'étant pas un Pokémon Évolué.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die Mewtu von Pokémon deines Gegners, die keine entwickelten Pokémon sind, zugefügt würden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Giga Burn",
				'fr-fr': "Giga brûlure",
				'de-de': "Gigaverbrennung"
			},
			effect: {
				'en-us': "Discard all Energy attached to Mewtwo.",
				'fr-fr': "Défaussez toutes les Énergies attachées à Mewtwo.",
				'de-de': "Lege alle an Mewtu angelegten Energien auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278293,
		tcgplayer: 87433
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["david-cohen"]
		}
	]
}

export default card

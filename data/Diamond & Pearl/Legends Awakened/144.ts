import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
		de: "Mewtu"
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
				en: "Psybarrier",
				fr: "Barrage psy",
				de: "Psybarriere"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Mewtwo by your opponent's Pokémon that isn't an Evolved Pokémon.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Mewtwo par un Pokémon de votre adversaire n'étant pas un Pokémon Évolué.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die Mewtu von Pokémon deines Gegners, die keine entwickelten Pokémon sind, zugefügt würden."
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
				en: "Giga Burn",
				fr: "Giga brûlure",
				de: "Gigaverbrennung"
			},
			effect: {
				en: "Discard all Energy attached to Mewtwo.",
				fr: "Défaussez toutes les Énergies attachées à Mewtwo.",
				de: "Lege alle an Mewtu angelegten Energien auf deinen Ablagestapel."
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
		cardmarket: 278160,
		tcgplayer: 87433
	}
}

export default card

import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [210],
	set: Set,

	name: {
		'fr-fr': "Granbull",
		'en-us': "Granbull",
		'es-es': "Granbull",
		'it-it': "Granbull",
		'pt-br': "Granbull",
		'de-de': "Granbull"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Snubbull",
		'en-us': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Confrontation",
			'en-us': "Confront",
			'es-es': "Confrontar",
			'it-it': "Confronto",
			'pt-br': "Confrontar",
			'de-de': "Konfrontieren"
		},

		damage: 50
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'fr-fr': "Tacle Brutal",
			'en-us': "Wild Tackle",
			'es-es': "Placaje Salvaje",
			'it-it': "Azionferoce",
			'pt-br': "Investida Feroz",
			'de-de': "Wilder Tackle"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Although it's popular with young people, Granbull is timid and sensitive, so it's totally incompetent as a watchdog.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725168,
				tcgplayer: 509860,
				cardtrader: 255773
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725168,
				tcgplayer: 509860,
				cardtrader: 255773
			}
		},
	],

	illustrator: "Lee HyunJung",

	
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [210],
	set: Set,

	name: {
		fr: "Granbull",
		en: "Granbull",
		es: "Granbull",
		it: "Granbull",
		pt: "Granbull",
		de: "Granbull"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		fr: "Snubbull",
		en: "Snubbull",
		es: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull",
		de: "Snubbull"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Confrontation",
			en: "Confront",
			es: "Confrontar",
			it: "Confronto",
			pt: "Confrontar",
			de: "Konfrontieren"
		},

		damage: 50
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			fr: "Tacle Brutal",
			en: "Wild Tackle",
			es: "Placaje Salvaje",
			it: "Azionferoce",
			pt: "Investida Feroz",
			de: "Wilder Tackle"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
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
		en: "Although it's popular with young people, Granbull is timid and sensitive, so it's totally incompetent as a watchdog.",
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

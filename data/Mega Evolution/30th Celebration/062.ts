import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "This seems to be the Iron Serpent mentioned in an old book. The Iron Serpent is said to have turned the land to ash with its lightning."
	},

	name: {
		en: "Miraidon",
		fr: "Miraidon",
		de: "Miraidon",
		es: "Miraidon",
		it: "Miraidon",
		'es-mx': "Miraidon"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1008],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant",
			de: "Flotter Sprung",
			es: "Rayo Mach",
			it: "Fulmine Mach",
			'es-mx': "Superrayo"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Electro Drift",
			fr: "Turbo Volt",
			de: "Blitztour",
			es: "Electroderrape",
			it: "Fulmiscatto",
			'es-mx': "Electroderrape"
		},

		effect: {
			en: "Discard 2 <span class=\"energy-symbol Lightning\" title=\"Lightning\">Lightning</span> Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies <span class=\"energy-symbol Lightning\" title=\"Électrique\">Lightning</span> de ce Pokémon.",
			de: "Lege 2 <span class=\"energy-symbol Lightning\" title=\"Elektro\">Lightning</span>-Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 2 Energías <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> de este Pokémon.",
			it: "Scarta due Energie <span class=\"energy-symbol Lightning\" title=\"Lampo\">Lightning</span> da questo Pokémon.",
			'es-mx': "Descarta 2 Energías <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> de este Pokémon."
		},

		damage: 140,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907669,
				tcgplayer: 716461
			}
		}
	],
}

export default card
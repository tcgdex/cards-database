import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [973],
	set: Set,

	name: {
		'en-us': "Flamigo",
		'fr-fr': "Flamenroule",
		'es-es': "Flamigo",
		'it-it': "Flamigo",
		'pt-br': "Flamigo",
		'de-de': "Flaminkno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Nosedive",
			'fr-fr': "Descente en Piqué",
			'es-es': "Ataque en Picado",
			'it-it': "Rapidiscesa",
			'pt-br': "Mergulhar de Bico",
			'de-de': "Sturzflugangriff"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "kantaro",

	description: {
		'en-us': "Thanks to a behavior of theirs known as \"synchronizing,\" an entire flock of these Pokémon can attack simultaneously in perfect harmony.",
	},

	thirdParty: {
        cardmarket: 702461,
        tcgplayer: 488060
    }
}

export default card
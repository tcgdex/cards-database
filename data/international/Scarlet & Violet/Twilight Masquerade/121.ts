import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [305],
	set: Set,

	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'es-es': "Lairon",
		'it-it': "Lairon",
		'pt-br': "Lairon",
		'de-de': "Stollrak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'es-es': "Aron",
		'it-it': "Aron",
		'pt-br': "Aron",
		'de-de': "Stollunior"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Steel Tackle",
			'fr-fr': "Charge d'Acier",
			'es-es': "Placaje de Acero",
			'it-it': "Ferrazione",
			'pt-br': "Colisão de Aço",
			'de-de': "Stahltackle"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 40
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier",
			'es-es': "Garra Metal",
			'it-it': "Ferrartigli",
			'pt-br': "Garra de Metal",
			'de-de': "Metallklaue"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Lairon live in mountains brimming with spring water and iron ore, so these Pokémon often came into conflict with humans in the past.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769295,
				tcgplayer: 550165
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769295,
				tcgplayer: 550165
			}
		},
	],

	illustrator: "takashi shiraishi",

}

export default card
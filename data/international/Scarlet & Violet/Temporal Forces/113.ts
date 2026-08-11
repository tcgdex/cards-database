import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [374],
	set: Set,

	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'es-es': "Beldum",
		'it-it': "Beldum",
		'pt-br': "Beldum",
		'de-de': "Tanhel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Dig Claws",
			'fr-fr': "Creusogriffes",
			'es-es': "Hundir Garras",
			'it-it': "Scavazanne",
			'pt-br': "Fincar Garras",
			'de-de': "Schaufelkrallen"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Iron Tackle",
			'fr-fr': "Charge de Fer",
			'es-es': "Bloqueo de Hierro",
			'it-it': "Azione Ferrea",
			'pt-br': "Golpe de Colisão Férreo",
			'de-de': "Eisentackle"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 50
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
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "From its rear, Beldum emits a magnetic force that rapidly pulls opponents in. They get skewered on Beldum's sharp claws.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760743,
				tcgplayer: 542857
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760743,
				tcgplayer: 542857
			}
		},
	],

	illustrator: "hatachu",

}

export default card
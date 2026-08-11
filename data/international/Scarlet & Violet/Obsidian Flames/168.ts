import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [264],
	set: Set,

	name: {
		'fr-fr': "Linéon",
		'en-us': "Linoone",
		'es-es': "Linoone",
		'it-it': "Linoone",
		'pt-br': "Linoone",
		'de-de': "Geradaks"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Zigzaton",
		'en-us': "Zigzagoon",
		'es-es': "Zigzagoon",
		'it-it': "Zigzagoon",
		'pt-br': "Zigzagoon",
		'de-de': "Zigzachs"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Bélier Volant",
			'en-us': "Jet Headbutt",
			'es-es': "Turbocabezazo",
			'it-it': "Zuccata Jet",
			'pt-br': "Cabeçada a Jato",
			'de-de': "Flinke Kopfnuss"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Attaque Imprudente",
			'en-us': "Reckless Charge",
			'es-es': "Carga Descuidada",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável",
			'de-de': "Waghalsiger Sturmangriff"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "It uses its explosive speed and razor-sharp claws to bring down prey. Running along winding paths is not its strong suit.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725248,
				tcgplayer: 509696,
				cardtrader: 256064
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725248,
				tcgplayer: 509696,
				cardtrader: 256064
			}
		},
	],

	illustrator: "Nagomi Nijo",

	
}

export default card

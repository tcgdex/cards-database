import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [695],
	set: Set,

	name: {
		'en-us': "Heliolisk",
		'fr-fr': "Iguolta",
		'es-es': "Heliolisk",
		'it-it': "Heliolisk",
		'pt-br': "Heliolisk",
		'de-de': "Elezard"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
		'es-es': "Helioptile",
		'it-it': "Helioptile",
		'pt-br': "Helioptile",
		'de-de': "Eguana"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Wild Charge",
			'fr-fr': "Éclair Fou",
			'es-es': "Voltio Cruel",
			'it-it': "Sprizzalampo",
			'pt-br': "Ataque Selvagem",
			'de-de': "Stromstoß"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "A now-vanished desert culture treasured these Pokémon. Appropriately, when Heliolisk came to the Galar region, treasure came with them.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769245,
				tcgplayer: 550115
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769245,
				tcgplayer: 550115
			}
		},
	],

	illustrator: "Atsuya Uki",

}

export default card
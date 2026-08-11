import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [304],
	set: Set,

	name: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'es-es': "Aron",
		'it-it': "Aron",
		'pt-br': "Aron",
		'de-de': "Stollunior"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Double-Edge",
			'fr-fr': "Damoclès",
			'es-es': "Doble Filo",
			'it-it': "Sdoppiatore",
			'pt-br': "Faca de Dois Gumes",
			'de-de': "Risikotackle"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 20
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
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It eats iron ore—and sometimes railroad tracks— to build up the steel armor that protects its body.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769294,
				tcgplayer: 550164
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769294,
				tcgplayer: 550164
			}
		},
	],

	illustrator: "Gapao",

}

export default card
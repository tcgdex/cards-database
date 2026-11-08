import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Erika's Oddish",
		'fr-fr': "Mystherbe d'Erika",
		'es-es': "Oddish de Erika",
		'es-mx': "Oddish de Erika",
		'de-de': "Erikas Myrapla",
		'it-it': "Oddish di Erika",
		'pt-br': "Oddish da Érica"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'es-mx': "Carga Temeraria",
			'de-de': "Waghalsiger Sturmangriff",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "When it is woken by moonlight, it wanders about. But during the day, it stays still underground.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869612,
				tcgplayer: 675813
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 870136,
				tcgplayer: 676852
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870135,
				tcgplayer: 676992
			}
		},
	],
}

export default card

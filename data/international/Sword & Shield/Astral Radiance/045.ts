import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [647],
	set: Set,

	name: {
		'en-us': "Keldeo",
		'fr-fr': "Keldeo",
		'es-es': "Keldeo",
		'it-it': "Keldeo",
		'pt-br': "Keldeo",
		'de-de': "Keldeo"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Line Force",
			'fr-fr': "Force Linéaire",
			'es-es': "Fuerza Lineal",
			'it-it': "Schieraforza",
			'pt-br': "Força Linear",
			'de-de': "Gebündelte Kraft"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon en Banca.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon nella tua panchina.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no seu Banco.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "When it is resolute, its body fills with power and it becomes swifter. Its jumps are then too fast to follow.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658584,
				tcgplayer: 272245
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658584,
				tcgplayer: 272245
			}
		},
	],
}

export default card

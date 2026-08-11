import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [573],
	set: Set,

	name: {
		'en-us': "Cinccino",
		'fr-fr': "Pashmilla",
		'de-de': "Chillabell",
		'it-it': "Cinccino",
		'pt-br': "Cinccino",
		'es-es': "Cinccino",
		'es-mx': "Cinccino"
	},

	illustrator: "tono",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'de-de': "Picochilla",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'es-es': "Minccino",
		'es-mx': "Minccino"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Do the Wave",
			'fr-fr': "Faites la Vague",
			'de-de': "Wellenreiten",
			'it-it': "Fare la Ola",
			'pt-br': "Fazer a Ola",
			'es-es': "Hacer la Ola",
			'es-mx': "Hacer la Ola"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank 20 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon nella tua panchina.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada um dos seus Pokémon no Banco.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon en Banca.",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon en Banca."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836226,
				tcgplayer: 642607
			}
		},
	]
}

export default card

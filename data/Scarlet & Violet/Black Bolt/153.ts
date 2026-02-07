import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [573],
	set: Set,

	name: {
		en: "Cinccino",
		fr: "Pashmilla",
		de: "Chillabell",
		it: "Cinccino",
		pt: "Cinccino",
		es: "Cinccino",
		'es-mx': "Cinccino"
	},

	illustrator: "tono",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
		de: "Picochilla",
		it: "Minccino",
		pt: "Minccino",
		es: "Minccino",
		'es-mx': "Minccino"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Do the Wave",
			fr: "Faites la Vague",
			de: "Wellenreiten",
			it: "Fare la Ola",
			pt: "Fazer a Ola",
			es: "Hacer la Ola",
			'es-mx': "Hacer la Ola"
		},

		effect: {
			en: "This attack does 20 more damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 20 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella tua panchina.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada um dos seus Pokémon no Banco.",
			es: "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon en Banca.",
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
				cardmarket: 836226
			}
		},
	]
}

export default card

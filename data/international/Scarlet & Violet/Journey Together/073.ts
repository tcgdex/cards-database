import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [861],
	set: Set,

	name: {
		'en-us': "Grimmsnarl",
		'fr-fr': "Angoliath",
		'es-es': "Grimmsnarl",
		'de-de': "Olangaar",
		'it-it': "Grimmsnarl",
		'pt-br': "Grimmsnarl",
		'es-mx': "Grimmsnarl"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Morgrem",
		'fr-fr': "Fourbelin",
		'es-es': "Morgrem",
		'de-de': "Pelzebub",
		'it-it': "Morgrem",
		'pt-br': "Morgrem",
		'es-mx': "Morgrem"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Shadowy Knot",
			'fr-fr': "Nœud Sombre",
			'es-es': "Lazo Sombrío",
			'de-de': "Schattenknoten",
			'it-it': "Lacciombroso",
			'pt-br': "Nó Sombrio",
			'es-mx': "Nudo Sombrío"
		},

		effect: {
			'en-us': "This attack does 50 damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'de-de': "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 50 danni per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 50 puntos de daño por cada Colorless en el Costo de Retirada del Pokémon Activo de tu rival."
		},

		damage: "50×"
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'es-es': "Megapuño",
			'de-de': "Megahieb",
			'it-it': "Megapugno",
			'pt-br': "Megassoco",
			'es-mx': "Megapuño"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Nisota Niso",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817225,
				tcgplayer: 623500
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817225,
				tcgplayer: 623500
			}
		},
	],
}

export default card

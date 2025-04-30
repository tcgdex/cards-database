import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Grimmsnarl",
		fr: "Angoliath",
		es: "Grimmsnarl",
		de: "Olangaar",
		it: "Grimmsnarl",
		pt: "Grimmsnarl",
		'es-mx': "Grimmsnarl"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Shadowy Knot",
			fr: "Nœud Sombre",
			es: "Lazo Sombrío",
			de: "Schattenknoten",
			it: "Lacciombroso",
			pt: "Nó Sombrio",
			'es-mx': "Nudo Sombrío"
		},

		effect: {
			en: "This attack does 50 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte zu.",
			it: "Questo attacco infligge 50 danni per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 50 puntos de daño por cada Colorless en el Costo de Retirada del Pokémon Activo de tu rival."
		},

		damage: "50×"
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			de: "Megahieb",
			it: "Megapugno",
			pt: "Megassoco",
			'es-mx': "Megapuño"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card

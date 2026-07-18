import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Marshadow",
		fr: "Marshadow",
		es: "Marshadow",
		'es-mx': "Marshadow",
		de: "Marshadow",
		it: "Marshadow",
		pt: "Marshadow"
	},

	illustrator: "Nakamura Ippan",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [802],
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Shadowy Knot",
			fr: "Nœud Sombre",
			es: "Lazo Sombrío",
			'es-mx': "Nudo Sombrío",
			de: "Schattenknoten",
			it: "Lacciombroso",
			pt: "Nó Sombrio"
		},

		cost: ["Psychic"],

		damage: "30×",

		effect: {
			en: "This attack does 30 damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 30 dégâts pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada {C} en el Costo de Retirada del Pokémon Activo de tu rival.",
			de: "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano para cada {C} no Custo de Recuo do Pokémon Ativo do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895826,
				tcgplayer: 704797
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895826,
				tcgplayer: 704797
			}
		},
	],
}

export default card

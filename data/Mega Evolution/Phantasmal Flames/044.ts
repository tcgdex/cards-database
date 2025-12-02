import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Alcremie",
		fr: "Charmilly",
		es: "Alcremie",
		'es-mx': "Alcremie",
		de: "Pokusan",
		it: "Alcremie",
		pt: "Alcremie"
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [869],
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Sweet Circle",
			fr: "Cercle Sucré",
			es: "Círculo Dulce",
			'es-mx': "Dulce Círculo",
			de: "Süße Runde",
			it: "Dolce Cerchio",
			pt: "Ciranda Açucarada"
		},

		effect: {
			en: "This attack does 20 damage for each of your Pokémon in play.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
			es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
			de: "Diese Attacke fügt für jedes deiner Pokémon im Spiel 20 Schadenspunkte zu.",
			it: "Questo attacco infligge 20 danni per ciascuno dei tuoi Pokémon in gioco.",
			pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857619
	}
}

export default card
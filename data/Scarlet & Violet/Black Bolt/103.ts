import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [535],
	set: Set,

	name: {
		en: "Tympole",
		fr: "Tritonde",
		de: "Schallquap",
		it: "Tympole",
		pt: "Tympole",
		es: "Tympole",
		'es-mx': "Tympole"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Round",
			fr: "Chant Canon",
			de: "Kanon",
			it: "Coro",
			pt: "Circular",
			es: "Canon",
			'es-mx': "Canon"
		},

		effect: {
			en: "This attack does 20 damage for each of your Pokémon in play that has the Round attack.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu ayant l'attaque Chant Canon.",
			de: "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 20 Schadenspunkte zu.",
			it: "Questo attacco infligge 20 danni per ogni tuo Pokémon in gioco che ha l'attacco Coro.",
			pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo que tiver o ataque Circular.",
			es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835940
	},

	variants: [{
		type: "holo",
		size: "standard",
		description: "Found in Booster Packs",
		set: "standard"
	}]
}

export default card
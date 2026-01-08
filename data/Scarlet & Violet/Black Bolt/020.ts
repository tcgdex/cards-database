import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [536],
	set: Set,

	name: {
		en: "Palpitoad",
		fr: "Batracné",
		de: "Mebrana",
		it: "Palpitoad",
		pt: "Palpitoad",
		es: "Palpitoad",
		'es-mx': "Palpitoad"
	},

	illustrator: "Yukihiro Tada",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		en: "Tympole",
		fr: "Tritonde",
		de: "Schallquap",
		it: "Tympole",
		pt: "Tympole",
		es: "Tympole",
		'es-mx': "Tympole"
	},
	stage: "Stage1",

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
			en: "This attack does 40 damage for each of your Pokémon in play that has the Round attack.",
			fr: "Cette attaque inflige 40 dégâts pour chacun de vos Pokémon en jeu ayant l'attaque Chant Canon.",
			de: "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 40 Schadenspunkte zu.",
			it: "Questo attacco infligge 40 danni per ogni tuo Pokémon in gioco che ha l'attacco Coro.",
			pt: "Este ataque causa 40 pontos de dano para cada um dos seus Pokémon em jogo que tiver o ataque Circular.",
			es: "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon."
		},

		damage: "40×"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			de: "Wellenplatscher",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante",
			es: "Chapoteo Ondulante",
			'es-mx': "Acuasalpicadura"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835942
	}
}

export default card
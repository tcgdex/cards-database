import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [537],
	set: Set,

	name: {
		'en-us': "Seismitoad",
		'fr-fr': "Crapustule",
		'de-de': "Branawarz",
		'it-it': "Seismitoad",
		'pt-br': "Seismitoad",
		'es-es': "Seismitoad",
		'es-mx': "Seismitoad"
	},

	illustrator: "Shinji Kanda",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
		'de-de': "Mebrana",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'es-es': "Palpitoad",
		'es-mx': "Palpitoad"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Round",
			'fr-fr': "Chant Canon",
			'de-de': "Kanon",
			'it-it': "Coro",
			'pt-br': "Circular",
			'es-es': "Canon",
			'es-mx': "Canon"
		},

		effect: {
			'en-us': "This attack does 70 damage for each of your Pokémon in play that has the Round attack.",
			'fr-fr': "Cette attaque inflige 70 dégâts pour chacun de vos Pokémon en jeu ayant l'attaque Chant Canon.",
			'de-de': "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 70 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 70 danni per ogni tuo Pokémon in gioco che ha l'attacco Coro.",
			'pt-br': "Este ataque causa 70 pontos de dano para cada um dos seus Pokémon em jogo que tiver o ataque Circular.",
			'es-es': "Este ataque hace 70 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon.",
			'es-mx': "Este ataque hace 70 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon."
		},

		damage: "70×"
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hyper Voice",
			'fr-fr': "Mégaphone",
			'de-de': "Schallwelle",
			'it-it': "Granvoce",
			'pt-br': "Hipervoz",
			'es-es': "Vozarrón",
			'es-mx': "Hipervoz"
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836117,
				tcgplayer: 642558
			}
		},
	]
}

export default card

import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [536],
	set: Set,

	name: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
		'de-de': "Mebrana",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'es-es': "Palpitoad",
		'es-mx': "Palpitoad"
	},

	illustrator: "Yukihiro Tada",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde",
		'de-de': "Schallquap",
		'it-it': "Tympole",
		'pt-br': "Tympole",
		'es-es': "Tympole",
		'es-mx': "Tympole"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

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
			'en-us': "This attack does 40 damage for each of your Pokémon in play that has the Round attack.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chacun de vos Pokémon en jeu ayant l'attaque Chant Canon.",
			'de-de': "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 40 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 40 danni per ogni tuo Pokémon in gioco che ha l'attacco Coro.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada um dos seus Pokémon em jogo que tiver o ataque Circular.",
			'es-es': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon."
		},

		damage: "40×"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'de-de': "Wellenplatscher",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante",
			'es-es': "Chapoteo Ondulante",
			'es-mx': "Acuasalpicadura"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835942,
				tcgplayer: 642472
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835942,
				tcgplayer: 642472
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836300,
				tcgplayer: 642717
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836302,
				tcgplayer: 642645
			}
		}
	]
}

export default card

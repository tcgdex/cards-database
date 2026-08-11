import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [535],
	set: Set,

	name: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde",
		'de-de': "Schallquap",
		'it-it': "Tympole",
		'pt-br': "Tympole",
		'es-es': "Tympole",
		'es-mx': "Tympole"
	},

	illustrator: "Yukihiro Tada",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

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
			'en-us': "This attack does 20 damage for each of your Pokémon in play that has the Round attack.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu ayant l'attaque Chant Canon.",
			'de-de': "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 20 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 20 danni per ogni tuo Pokémon in gioco che ha l'attacco Coro.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo que tiver o ataque Circular.",
			'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835940,
				tcgplayer: 642471
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835940,
				tcgplayer: 642471
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836299,
				tcgplayer: 642716
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836297,
				tcgplayer: 642644
			}
		}
	],
}

export default card

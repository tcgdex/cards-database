import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Awakening Drum",
		'fr-fr': "Tambour Éveil",
		'es-es': "Tambores del Despertar",
		'it-it': "Tamburosveglia",
		'pt-br': "Tambor do Despertar",
		'de-de': "Erweckende Trommel"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		'en-us': "Draw a card for each of your Ancient Pokémon in play.",
		'fr-fr': "Piochez une carte pour chacun de vos Pokémon Temps passé en jeu.",
		'es-es': "Roba 1 carta por cada uno de tus Pokémon del pasado en juego.",
		'it-it': "Pesca una carta per ciascuno dei tuoi Pokémon Tempo Passato in gioco.",
		'pt-br': "Compre uma carta para cada um dos seus Pokémon Ancestrais em jogo.",
		'de-de': "Ziehe 1 Karte für jedes deiner Pokémon aus der Vergangenheit im Spiel."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760771,
				tcgplayer: 542654
			}
		},
	],

	illustrator: "Toyste Beach",

}

export default card
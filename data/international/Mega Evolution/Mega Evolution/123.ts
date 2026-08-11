import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pokémon Center Lady",
		'fr-fr': "Dame du Centre Pokémon",
		'de-de': "Pokémon-Center-Dame",
		'it-it': "Addetta del Centro Pokémon",
		'es-es': "Chica del Centro Pokémon",
		'pt-br': "Dama do Centro Pokémon",
		'es-mx': "Chica del Centro Pokémon"
	},

	illustrator: "Tomowaka",
	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Heal 60 damage from 1 of your Pokémon, and it recovers from all Special Conditions.",
		'fr-fr': "Soignez 60 dégâts de l'un de vos Pokémon, et il guérit de tous les États Spéciaux.",
		'de-de': "Heile 60 Schadenspunkte bei 1 deiner Pokémon, und es erholt sich von allen Speziellen Zuständen.",
		'it-it': "Cura uno dei tuoi Pokémon da 60 danni e quel Pokémon guarisce da tutte le condizioni speciali.",
		'es-es': "Cura 60 puntos de daño a uno de tus Pokémon, y este se recupera de todas las Condiciones Especiales.",
		'pt-br': "Cure 60 pontos de dano de 1 dos seus Pokémon e ele se recupera de todas as Condições Especiais.",
		'es-mx': "Cura 60 puntos de daño a 1 de tus Pokémon, y este se recupera de todas las Condiciones Especiales."
	},

	trainerType: "Supporter",
	regulationMark: "I", 

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851194,
				tcgplayer: 654462
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851194,
				tcgplayer: 654462
			}
		},
	],
}

export default card

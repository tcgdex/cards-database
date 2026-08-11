import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Pokémon Center Lady",
		'fr-fr': "Dame du Centre Pokémon",
		'es-es': "Chica del Centro Pokémon",
		'it-it': "Addetta del Centro Pokémon",
		'pt-br': "Dama do Centro Pokémon",
		'de-de': "Pokémon-Center-Dame"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Heal 60 damage from 1 of your Pokémon, and it recovers from all Special Conditions.",
		'fr-fr': "Soignez 60 dégâts de l'un de vos Pokémon, et il guérit de tous les États Spéciaux.",
		'es-es': "Cura 60 puntos de daño a 1 de tus Pokémon, y este se recupera de todas las Condiciones Especiales.",
		'it-it': "Cura uno dei tuoi Pokémon da 60 danni. Quel Pokémon guarisce da tutte le condizioni speciali.",
		'pt-br': "Cure 60 pontos de dano de 1 dos seus Pokémon e aquele Pokémon se recupera de quaisquer Condições Especiais.",
		'de-de': "Heile 60 Schadenspunkte bei 1 deiner Pokémon, und es erholt sich von allen Speziellen Zuständen."
	},

	trainerType: "Supporter",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512635,
				tcgplayer: 226545
			}
		},
	],
}

export default card

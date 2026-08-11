import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Moomoo Cheese",
		'fr-fr': "Fromage Meumeu",
		'es-es': "Queso Mu-mu",
		'it-it': "Formaggio Mumu",
		'pt-br': "Queijo de Moomoo",
		'de-de': "Kuhmuh-Käse"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Heal 30 damage from up to 2 of your Pokémon that have Energy attached.",
		'fr-fr': "Soignez 30 dégâts d'un maximum de 2 de vos Pokémon auxquels de l'Énergie est attachée.",
		'es-es': "Cura 30 puntos de daño de hasta 2 de tus Pokémon que tengan alguna Energía unida a ellos.",
		'it-it': "Cura fino a due Pokémon che hanno Energie assegnate da 30 danni.",
		'pt-br': "Cure 30 pontos de dano de até 2 dos seus Pokémon que tenham Energia ligada a eles.",
		'de-de': "Heile 30 Schadenspunkte von bis zu 2 deiner Pokémon, an die Energie angelegt ist."
	},

	trainerType: "Item",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512490,
				tcgplayer: 226515
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512490,
				tcgplayer: 226515
			}
		},
	],
}

export default card

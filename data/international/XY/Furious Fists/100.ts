import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Super Scoop Up",
		'fr-fr': "Super Rappel",
		'es-es': "Superlevante",
		'it-it': "Super Recupero",
		'pt-br': "Super Recolhida",
		'de-de': "Super-Anziehungskraft"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c'est face, placez l'un de vos Pokémon ainsi que toutes les cartes qui lui sont attachées dans votre main.",
		'en-us': "Flip a coin. If heads, put 1 of your Pokémon and all cards attached to it into your hand.",
		'es-es': "Lanza 1 moneda. Si sale cara, pon 1 de tus Pokémon y todas las cartas unidas a él en tu mano.",
		'it-it': "Lancia una moneta. Se esce testa, riprendi in mano uno dei tuoi Pokémon e tutte le carte a esso assegnate.",
		'pt-br': "Jogue uma moeda. Se sair cara, coloque 1 dos seus Pokémon e todas as cards ligadas a ele em sua mão.",
		'de-de': "Wirf 1 Münze. Nimm bei \"Kopf\" 1 deiner Pokémon und alle daran angelegten Karten zurück auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281764,
		tcgplayer: 92283
	}
}

export default card

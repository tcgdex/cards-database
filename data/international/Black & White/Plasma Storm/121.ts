import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Ether",
		'fr-fr': "Huile",
		'es-es': "Éter",
		'it-it': "Etere",
		'pt-br': "Éter",
		'de-de': "Äther"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Montrez la carte du dessus de votre deck. Si la carte est une carte Énergie de base, attachez-la à 1 de vos Pokémon. Si ce n’est pas une carte Énergie de base, remettez-la sur le dessus de votre deck.",
		'en-us': "Reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If it is not a basic Energy card, return it to the top of your deck.",
		'es-es': "Enseña la primera carta de tu baraja. Si es una carta de Energía Básica, únela a 1 de tus Pokémon. Si no es una carta de Energía Básica, ponla de nuevo en la parte superior de tu baraja.",
		'it-it': "Mostra la carta in cima al tuo mazzo. Se è una carta Energia base, assegnala a uno dei tuoi Pokémon. Se non lo è, rimettila in cima al tuo mazzo.",
		'pt-br': "Revele o card de cima do seu baralho. Se esse card for um card de Energia básica, ligue-o a 1 dos seus Pokémon. Caso contrário, coloque-o de volta em cima do seu baralho.",
		'de-de': "Decke die oberste Karte deines Decks auf. Handelt es sich um eine Basis-Energiekarte, lege sie an 1 deiner Pokémon an. Handelt es sich nicht um eine Basis-Energiekarte, lege sie zurück auf dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280861,
		tcgplayer: 85332
	}
}

export default card

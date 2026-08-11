import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Rescue Carrier",
		'fr-fr': "Valise de Secours",
		'es-es': "Carrito de Rescate",
		'it-it': "Trolley di Salvataggio",
		'pt-br': "Carrinho de Resgate",
		'de-de': "Rettungsbox"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Put up to 2 Pokémon, each with 90 HP or less, from your discard pile into your hand.",
		'fr-fr': "Ajoutez jusqu'à 2 Pokémon, avec chacun 90 PV ou moins, de votre pile de défausse à votre main.",
		'es-es': "Pon hasta 2 Pokémon, cada uno con 90 PS o menos, de tu pila de descartes en tu mano.",
		'it-it': "Prendi fino a due Pokémon, ciascuno con 90 PS o meno, dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
		'pt-br': "Coloque até 2 Pokémon, cada um com 90 PS ou menos, da sua pilha de descarte na sua mão.",
		'de-de': "Nimm bis zu 2 Pokémon, jedes mit 90 oder weniger KP, aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	illustrator: "Ryo Ueda",
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574212,
				tcgplayer: 246780
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574212,
				tcgplayer: 246780
			}
		},
	],
}

export default card

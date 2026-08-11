import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nemona's Backpack",
		'fr-fr': "Sac de Menzi",
		'es-es': "Mochila de Mencía",
		'it-it': "Zaino di Nemi",
		'pt-br': "Mochila da Noêmia",
		'de-de': "Nemilas Rucksack"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Put up to 2 Nemona cards from your discard pile into your hand.",
		'fr-fr': "Ajoutez jusqu'à 2 cartes Menzi de votre pile de défausse à votre main.",
		'es-es': "Pon hasta 2 cartas de Mencía de tu pila de descartes en tu mano.",
		'it-it': "Prendi fino a due carte Nemi dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque até 2 cartas Noêmia da sua pilha de descarte na sua mão.",
		'de-de': "Nimm bis zu 2 Nemila-Karten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751622,
				tcgplayer: 534445,
				cardtrader: 274267
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751622,
				tcgplayer: 534445,
				cardtrader: 274267
			}
		},
	],

	illustrator: "AYUMI ODASHIMA",

	
}

export default card

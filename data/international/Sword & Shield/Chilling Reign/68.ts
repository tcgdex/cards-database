import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [685],
	set: Set,

	name: {
		'en-us': "Slurpuff",
		'fr-fr': "Cupcanaille",
		'es-es': "Slurpuff",
		'it-it': "Slurpuff",
		'pt-br': "Slurpuff",
		'de-de': "Sabbaione"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
		'es-es': "Swirlix",
		'it-it': "Swirlix",
		'pt-br': "Swirlix",
		'de-de': "Flauschling"
	},

	attacks: [{
		name: {
			'en-us': "Follow the Scent",
			'fr-fr': "Chasse aux Senteurs",
			'es-es': "Señuelo Aroma",
			'it-it': "Scia di Profumino",
			'pt-br': "Cheirinho Bom",
			'de-de': "Folge dem Duft"
		},

		effect: {
			'en-us': "Flip 3 coins. Put a number of cards up to the number of heads from your discard pile into your hand.",
			'fr-fr': "Lancez 3 pièces. Ajoutez à votre main un nombre de cartes de votre pile de défausse inférieur ou égal au nombre de côtés face obtenus.",
			'es-es': "Lanza 3 monedas. Pon tantas cartas como veces haya salido cara de tu pila de descartes en tu mano.",
			'it-it': "Lancia tre volte una moneta. Prendi dalla tua pila degli scarti un numero di carte uguale o inferiore al numero di volte in cui è uscito testa e aggiungile a quelle che hai in mano.",
			'pt-br': "Jogue 3 moedas. Coloque um número de cartas da sua pilha de descarte na sua mão até o número de caras.",
			'de-de': "Wirf 3 Münzen. Nimm bis zu so viele Karten, wie du Kopf geworfen hast, aus deinem Ablagestapel auf deine Hand."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Fairy Wind",
			'fr-fr': "Vent Féérique",
			'es-es': "Viento Feérico",
			'it-it': "Vento di Fata",
			'pt-br': "Vento de Fada",
			'de-de': "Feenbrise"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Slurpuff's fur contains a lot of air, making it soft to the touch and lighter than it looks."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567176,
				tcgplayer: 241729
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567176,
				tcgplayer: 241729
			}
		},
	],
}

export default card

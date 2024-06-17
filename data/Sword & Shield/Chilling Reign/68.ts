import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [685],
	set: Set,

	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
		es: "Slurpuff",
		it: "Slurpuff",
		pt: "Slurpuff",
		de: "Sabbaione"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
		es: "Swirlix",
		it: "Swirlix",
		pt: "Swirlix",
		de: "Flauschling"
	},

	attacks: [{
		name: {
			en: "Follow the Scent",
			fr: "Chasse aux Senteurs",
			es: "Señuelo Aroma",
			it: "Scia di Profumino",
			pt: "Cheirinho Bom",
			de: "Folge dem Duft"
		},

		effect: {
			en: "Flip 3 coins. Put a number of cards up to the number of heads from your discard pile into your hand.",
			fr: "Lancez 3 pièces. Ajoutez à votre main un nombre de cartes de votre pile de défausse inférieur ou égal au nombre de côtés face obtenus.",
			es: "Lanza 3 monedas. Pon tantas cartas como veces haya salido cara de tu pila de descartes en tu mano.",
			it: "Lancia tre volte una moneta. Prendi dalla tua pila degli scarti un numero di carte uguale o inferiore al numero di volte in cui è uscito testa e aggiungile a quelle che hai in mano.",
			pt: "Jogue 3 moedas. Coloque um número de cartas da sua pilha de descarte na sua mão até o número de caras.",
			de: "Wirf 3 Münzen. Nimm bis zu so viele Karten, wie du Kopf geworfen hast, aus deinem Ablagestapel auf deine Hand."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
			es: "Viento Feérico",
			it: "Vento di Fata",
			pt: "Vento de Fada",
			de: "Feenbrise"
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Slurpuff's fur contains a lot of air, making it soft to the touch and lighter than it looks."
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Seedot",
		fr: "Grainipiot",
		es: "Seedot",
		it: "Seedot",
		pt: "Seedot",
		de: "Samurzel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "otumami",

	attacks: [{
		name: {
			en: "Astonish",
			fr: "Étonnement",
			es: "Impresionar",
			it: "Sgomento",
			pt: "Astonish",
			de: "Erstauner"
		},

		effect: {
			en: "Choose a random card from your opponent’s hand. Your opponent reveals that card and shuffles it into their deck.",
			fr: "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			pt: "Choose a random card from your opponent’s hand. Your opponent reveals that card and shuffles it into their deck.",
			de: "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck."
		},

		damage: 10,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "It attaches itself to a tree branch using the top of its head. Strong winds can sometimes make it fall."
	},

	dexId: [273]
}

export default card
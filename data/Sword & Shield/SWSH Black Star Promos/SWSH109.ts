import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar V",
		fr: "Tyranocif V",
		es: "Tyranitar V",
		it: "Tyranitar V",
		pt: "Tyranitar V",
		de: "Despotar V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Cragalanche",
			fr: "Lapidalanche",
			es: "Rocalud",
			it: "Valanghiaia",
			pt: "Cragalanche",
			de: "Grolllawine"
		},

		effect: {
			en: "Discard the top 2 cards of your opponent’s deck.",
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
			it: "Scarta le prime due carte del mazzo del tuo avversario.",
			pt: "Discard the top 2 cards of your opponent’s deck.",
			de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Single Strike Crush",
			fr: "Écrasement Poing Final",
			es: "Aplastamiento Golpe Brusco",
			it: "Schianto Colpo Singolo",
			pt: "Single Strike Crush",
			de: "Fokussierter-Angriff-Zermalmer"
		},

		effect: {
			en: "Discard the top 4 cards of your deck.",
			fr: "Défaussez les 4 cartes du dessus de votre deck.",
			es: "Descarta las 4 primeras cartas de tu baraja.",
			it: "Scarta le prime quattro carte del tuo mazzo.",
			pt: "Discard the top 4 cards of your deck.",
			de: "Lege die obersten 4 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 240,
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	stage: "Basic",
	suffix: "V",
	dexId: [248],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
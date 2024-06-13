import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [190],
	set: Set,

	name: {
		en: "Aipom",
		fr: "Capumain",
		es: "Aipom",
		it: "Aipom",
		pt: "Aipom",
		de: "Griffel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Yank Out",
			fr: "Extirper",
			es: "Arranque",
			it: "Strappar Via",
			pt: "Arrancar à Força",
			de: "Herausreißen"
		},

		effect: {
			en: "Discard random cards from your opponent’s hand until they have 5 cards in their hand.",
			fr: "Défaussez au hasard des cartes de la main de votre adversaire jusqu’à ce qu’il ne lui reste que 5 cartes en main.",
			es: "Descarta cartas aleatorias de la mano de tu rival hasta que este tenga 5 cartas en su mano.",
			it: "Scarta delle carte a caso dalla mano del tuo avversario fino a lasciarlo con cinque carte in mano.",
			pt: "Descarte cartas aleatórias da mão do seu oponente até que ele(a) tenha 5 cartas na própria mão.",
			de: "Lege so lang zufällige Karten aus der Hand deines Gegners auf seinen Ablagestapel, bis er 5 Karten auf der Hand hat."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Tail Smash",
			fr: "Éclate-Queue",
			es: "Coletazo",
			it: "Coda Esplosiva",
			pt: "Pancada de Cauda",
			de: "Schwanzschmetterer"
		},

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card
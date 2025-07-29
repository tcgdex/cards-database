import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Tormenting Spray",
		fr: "Spray Tourmenteur",
		es: "Espray Tormento",
		it: "Spray Attaccabrighe",
		pt: "Spray Atormentador",
		de: "Quälendes Spray"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire vous montre cette carte. Si c’est une carte Supporter, défaussez-la.",
		en: "Choose a random card from your opponent’s hand. Your opponent reveals that card. If it’s a Supporter card, discard it.",
		es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta. Si es una carta de Partidario, descártala.",
		it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta. Se si tratta di una carta Aiuto, scartala.",
		pt: "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta. Se for uma carta de Apoiador, descarte-a.",
		de: "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte. Wenn es eine Unterstützerkarte ist, lege sie auf seinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 299525
	}
}

export default card

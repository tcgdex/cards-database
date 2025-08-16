import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [510],
	set: Set,

	name: {
		en: "Liepard",
		fr: "Léopardus",
		de: "Kleoparda",
		it: "Liepard",
		pt: "Liepard",
		es: "Liepard",
		'es-mx': "Liepard"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Knock Off",
			fr: "Sabotage",
			de: "Abschlag",
			it: "Privazione",
			pt: "Derrubar",
			es: "Desarme",
			'es-mx': "Desarme"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Descarte uma carta aleatória da mão do seu oponente.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836004
	}
}

export default card
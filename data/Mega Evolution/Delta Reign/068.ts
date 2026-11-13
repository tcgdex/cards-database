import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Inkay",
		fr: "Sepiatop",
		de: "Iscalar",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		'es-mx': "Inkay"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Knock Off",
			fr: "Sabotage",
			de: "Abschlag",
			es: "Desarme",
			it: "Privazione",
			pt: "Derrubar",
			'es-mx': "Desarme"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Descarte uma carta aleatória da mão do seu oponente.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival."
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 728041,
		cardmarket: 918893
	}
}

export default card
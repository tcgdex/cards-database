import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmontop",
		fr: "Kapoera",
		es: "Hitmontop",
		'es-mx': "Hitmontop",
		de: "Kapoera",
		it: "Hitmontop",
		pt: "Hitmontop"
	},

	illustrator: "osare",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spin and Draw",
			fr: "Virevolte Piocheuse",
			es: "Giro y Robo",
			'es-mx': "Giro y Robo",
			de: "Wirbeln und ziehen",
			it: "Gira e Pesca",
			pt: "Girar e Comprar"
		},

		effect: {
			en: "Shuffle your hand into your deck. Then, draw 6 cards.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
			'es-mx': "Baraja tu mano en tu mazo. Después, roba 6 cartas.",
			de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten.",
			it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
			pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			es: "Patada Baja",
			'es-mx': "Patada Baja",
			de: "Fußkick",
			it: "Colpo Basso",
			pt: "Rasteira"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 676052,
		cardmarket: 869851
	}
}

export default card

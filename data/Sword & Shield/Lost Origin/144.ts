import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

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

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Mischievous Tail",
			fr: "Queue Malicieuse",
			es: "Cola Traviesa",
			it: "Coda Birichina",
			pt: "Cauda Maliciosa",
			de: "Frecher Schweif"
		},

		effect: {
			en: "Look at the top card of your opponent's deck. You may have your opponent shuffle their deck.",
			fr: "Regardez la carte du dessus du deck de votre adversaire. Vous pouvez demander à votre adversaire de mélanger son deck.",
			es: "Mira la primera carta de la baraja de tu rival. Puedes hacer que tu rival baraje las cartas de su baraja.",
			it: "Guarda la prima carta del mazzo del tuo avversario. Puoi far rimischiare il suo mazzo al tuo avversario.",
			pt: "Olhe a carta de cima do baralho do seu oponente. Você pode fazer com que o seu oponente embaralhe o próprio baralho.",
			de: "Schau dir die oberste Karte des Decks deines Gegners an. Du kannst deinen Gegner dazu veranlassen, sein Deck zu mischen."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		de: "Iscalar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Mischievous Tentacles",
			fr: "Tentacules Malicieux",
			es: "Tentáculos Traviesos",
			it: "Monelleria Tentacolare",
			pt: "Tentáculos Maliciosos",
			de: "Freche Tentakel"
		},

		effect: {
			en: "Look at the top card of your opponent's deck. You may have your opponent shuffle their deck.",
			fr: "Regardez la carte du dessus du deck de votre adversaire. Vous pouvez demander à votre adversaire de mélanger son deck.",
			es: "Mira la primera carta de la baraja de tu rival. Puedes hacer que tu rival baraje las cartas de su baraja.",
			it: "Guarda la prima carta del mazzo del tuo avversario. Puoi far rimischiare al tuo avversario il suo mazzo.",
			pt: "Olhe a carta de cima do baralho do seu oponente. Você pode fazer com que o seu oponente embaralhe o baralho dele.",
			de: "Schau dir die oberste Karte des Decks deines Gegners an. Du kannst deinen Gegner dazu veranlassen, sein Deck zu mischen."
		}
	}, {
		cost: ["Darkness"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Mori Yuu",

	thirdParty: {
		cardmarket: 780928
	}
}

export default card

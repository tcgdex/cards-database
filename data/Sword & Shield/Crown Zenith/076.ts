import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		pt: "Absol",
		de: "Absol"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			de: "Schlitzer"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Lost Claw",
			fr: "Griffe perdue",
			es: "Garra Perdida",
			it: "Artiglio Perduto",
			pt: "Garra Perdida",
			de: "Nirgendwo-Klaue"
		},

		effect: {
			en: "Put a random card from your opponent's hand in the Lost Zone.",
			fr: "Placez une carte au hasard de la main de votre adversaire dans la Zone Perdue.",
			es: "Pon 1 carta aleatoria de la mano de tu rival en la Zona Perdida.",
			it: "Prendi una carta a caso dalla mano del tuo avversario e mettila nell'area perduta.",
			pt: "Coloque 1 carta aleatória da mão do seu oponente na Zona Perdida.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners ins Nirgendwo."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card
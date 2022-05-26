import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Electrode"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Hisuian Voltorb",
		fr: "Voltorbe de Hisui",
		es: "Voltorb de Hisui",
		it: "Voltorb di Hisui",
		pt: "Voltorb de Hisui",
		de: "Hisui-Voltobal"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Triple Draw",
			fr: "Triple Pioche",
			es: "Triple Robo",
			it: "Pescata Tripla",
			pt: "Compra Tripla",
			de: "Dreifachzug"
		},

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
			es: "Roba 3 cartas.",
			it: "Pesca tre carte.",
			pt: "Compre 3 cartas.",
			de: "Ziehe 3 Karten."
		}
	}, {
		name: {
			en: "Irritated Bomb",
			fr: "Bombe Agacée",
			es: "Bomba Enojada",
			it: "Irritabomba",
			pt: "Bomba Irritada",
			de: "Gereizte Bombe"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
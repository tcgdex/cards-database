import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [101],
	set: Set,

	name: {
		en: "Hisuian Electrode",
		fr: "Électrode de Hisui",
		es: "Electrode de Hisui",
		it: "Electrode di Hisui",
		pt: "Electrode de Hisui",
		de: "Hisui-Lektrobal"
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
	},

	thirdParty: {
		cardmarket: 658489,
		tcgplayer: 272203
	}
}

export default card
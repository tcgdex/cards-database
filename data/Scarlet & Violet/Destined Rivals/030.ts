import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash",
		fr: "Galopa",
		de: "Gallopa",
		it: "Rapidash",
		es: "Rapidash",
		pt: "Rapidash",
		'es-mx': "Rapidash"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hurried Gait",
			fr: "Allure Pressée",
			de: "Eiliger Gang",
			it: "Andatura Frettolosa",
			es: "Marcha Apresurada",
			pt: "Marcha Apressada",
			'es-mx': "Marcha Apresurada"
		},

		effect: {
			en: "Once during your turn, you may draw a card.",
			fr: "Une fois pendant votre tour, vous pouvez piocher une carte.",
			de: "Einmal während deines Zuges kannst du 1 Karte ziehen.",
			it: "Una sola volta durante il tuo turno, puoi pescare una carta.",
			es: "Una vez durante tu turno, puedes robar 1 carta.",
			pt: "Uma vez durante o seu turno, você poderá comprar uma carta.",
			'es-mx': "Una vez durante tu turno, puedes robar 1 carta."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Fire Mane",
			fr: "Crinière de Feu",
			de: "Flammenmähne",
			it: "Criniera di Fuoco",
			es: "Crin de Fuego",
			pt: "Crina de Fogo",
			'es-mx': "Melena de Fuego"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card
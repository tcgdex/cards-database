import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [769],
	set: Set,

	name: {
		en: "Sandygast",
		fr: "Bacabouh",
		es: "Sandygast",
		it: "Sandygast",
		pt: "Sandygast",
		de: "Sankabuh"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 3,
	regulationMark: "E",
	illustrator: "KIYOTAKA OSHIYAMA",

	description: {
		en: "If you build sand mounds when you're playing, destroy them before you go home, or they may get possessed and become Sandygast."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Vibration",
			fr: "Vibration",
			de: "Schwingung",
			es: "Vibración",
			pt: "Vibração",
			it: "Vibrazione"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			de: "Spukschuss",
			es: "Disparo Embrujado",
			pt: "Tiro Assustador",
			it: "Colpomistero"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
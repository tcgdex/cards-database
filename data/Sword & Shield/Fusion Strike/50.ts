import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [90],
	set: Set,

	name: {
		en: "Shellder",
		fr: "Kokiyas",
		es: "Shellder",
		it: "Shellder",
		pt: "Shellder",
		de: "Muschas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "kawayoo",

	description: {
		en: "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Tongue Slap",
			fr: "Gros Coup de Langue",
			de: "Zungenschelle",
			es: "Bofetón Lengua",
			pt: "Tapa de Língua",
			it: "Linguasberla"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			de: "Wellenplatscher",
			es: "Chapoteo Ondulante",
			pt: "Onda Borrifante",
			it: "Schizzi d'Onda"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
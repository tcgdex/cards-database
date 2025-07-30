import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Klawf",
		fr: "Craparoi",
		es: "Klawf",
		it: "Klawf",
		pt: "Klawf",
		de: "Klibbe"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			es: "Agarre",
			it: "Presa",
			pt: "Agarramento Compressor",
			de: "Klammer"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Adrenaline Hammer",
			fr: "Marteau Adrénaline",
			es: "Martillo Adrenalina",
			it: "Martello Adrenalinico",
			pt: "Martelo de Adrenalina",
			de: "Adrenalinhammer"
		},

		effect: {
			en: "This Pokémon is now Confused.",
			fr: "Ce Pokémon est maintenant Confus.",
			es: "Este Pokémon pasa a estar Confundido.",
			it: "Questo Pokémon viene confuso.",
			pt: "Este Pokémon agora está Confuso.",
			de: "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Mina Nakai",

	thirdParty: {
		cardmarket: 702418
	}
}

export default card
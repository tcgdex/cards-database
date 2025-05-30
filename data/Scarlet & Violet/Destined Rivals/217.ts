import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Klawf",
		fr: "Craparoi",
		de: "Klibbe",
		it: "Klawf",
		es: "Klawf",
		pt: "Klawf"
	},

	illustrator: "Mina Nakai",
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
			de: "Klammer",
			it: "Presa",
			es: "Agarre",
			pt: "Agarramento Compressor"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Adrenaline Hammer",
			fr: "Marteau Adrénaline",
			de: "Adrenalinhammer",
			it: "Martello Adrenalinico",
			es: "Martillo Adrenalina",
			pt: "Martelo de Adrenalina"
		},

		effect: {
			en: "This Pokémon is now Confused.",
			fr: "Ce Pokémon est maintenant Confus.",
			de: "Dieses Pokémon ist jetzt verwirrt.",
			it: "Questo Pokémon viene confuso.",
			es: "Este Pokémon pasa a estar Confundido.",
			pt: "Este Pokémon agora está Confuso."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card
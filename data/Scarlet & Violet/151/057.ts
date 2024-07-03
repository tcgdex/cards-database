import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [57],
	set: Set,

	name: {
		fr: "Colossinge",
		en: "Primeape",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Fulmination",
			en: "Rant and Rave",
			es: "Despotricar",
			it: "Sbraita e Strepita",
			pt: "Armar um Barraco",
			de: "Toben und rasen"
		},

		effect: {
			fr: "Ce Pokémon est maintenant Confus.",
			en: "This Pokémon is now Confused.",
			es: "Este Pokémon pasa a estar Confundido.",
			it: "Questo Pokémon viene confuso.",
			pt: "Este Pokémon agora está Confuso.",
			de: "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Destruction Furieuse",
			en: "Raging Smash",
			es: "Golpe Rabioso",
			it: "Colpo Infuriato",
			pt: "Pancada Furiosa",
			de: "Wütender Schlag"
		},

		effect: {
			fr: "Si ce Pokémon n'est pas Confus, cette attaque ne fait rien.",
			en: "If this Pokémon isn't Confused, this attack does nothing.",
			es: "Si este Pokémon no está Confundido, este ataque no hace nada.",
			it: "Se questo Pokémon non è confuso, questo attacco non ha effetto.",
			pt: "Se este Pokémon não estiver Confuso, este ataque não fará nada.",
			de: "Wenn dieses Pokémon nicht verwirrt ist, hat diese Attacke keine Auswirkungen."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Annihilape",
		fr: "Courrousinge",
		es: "Annihilape",
		it: "Annihilape",
		pt: "Annihilape",
		de: "Epitaff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Tantrum",
			fr: "Mauvaise Humeur",
			es: "Rabieta",
			it: "Collera",
			pt: "Petulância",
			de: "Rappel"
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
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Destined Fight",
			fr: "Combat du Destin",
			es: "Lucha Predestinada",
			it: "Lotta Predestinata",
			pt: "Luta Predestinada",
			de: "Abgangsgefecht"
		},

		effect: {
			en: "Both Active Pokémon are Knocked Out.",
			fr: "Les deux Pokémon Actifs sont mis K.O.",
			es: "Ambos Pokémon Activos quedan Fuera de Combate.",
			it: "Entrambi i Pokémon attivi vengono messi KO.",
			pt: "Ambos os Pokémon Ativos são Nocauteados.",
			de: "Beide Aktiven Pokémon werden kampfunfähig."
		}
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "SIE NANAHARA",

	thirdParty: {
		cardmarket: 794416
	}
}

export default card

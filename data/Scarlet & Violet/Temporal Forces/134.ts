import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Tranquill",
		fr: "Colombeau",
		es: "Tranquill",
		it: "Tranquill",
		pt: "Tranquill"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide",
			es: "Picado Rápido",
			it: "Immersione Rapida",
			pt: "Mergulho Veloz"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Jet Wing",
			fr: "Aile Jet",
			es: "Ala Propulsión",
			it: "Ala Jet",
			pt: "Asa a Jato"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 70
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Breloom",
		fr: "Chapignon",
		es: "Breloom",
		it: "Breloom",
		pt: "Breloom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Punch",
			fr: "Koud'Poing",
			es: "Puño",
			it: "Pugno",
			pt: "Soco"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Knuckle Impact",
			fr: "Coup d'Articulations",
			es: "Impacto Nudillo",
			it: "Impatto Nocche",
			pt: "Impacto Ossudo"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
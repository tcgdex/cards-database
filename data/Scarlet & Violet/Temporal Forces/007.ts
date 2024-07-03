import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [286],
	set: Set,

	name: {
		en: "Breloom",
		fr: "Chapignon",
		es: "Breloom",
		it: "Breloom",
		pt: "Breloom",
		de: "Kapilz"
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
			pt: "Soco",
			de: "Boxhieb"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Knuckle Impact",
			fr: "Coup d'Articulations",
			es: "Impacto Nudillo",
			it: "Impatto Nocche",
			pt: "Impacto Ossudo",
			de: "Knöchelprall"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
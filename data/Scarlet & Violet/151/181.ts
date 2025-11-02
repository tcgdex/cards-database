import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [148],
	set: Set,

	name: {
		fr: "Draco",
		en: "Dragonair",
		es: "Dragonair",
		it: "Dragonair",
		pt: "Dragonair",
		de: "Dragonir"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Bataille",
			en: "Beat",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 20
	}, {
		cost: ["Water", "Lightning"],

		name: {
			fr: "Aqua Slash",
			en: "Aqua Slash",
			es: "Cuchillada Acuática",
			it: "Idrosquarcio",
			pt: "Aqua Corte",
			de: "Aquaschlag"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "During your next turn, this Pokémon can't attack.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "rika",

	thirdParty: {
		cardmarket: 733776
	}
}

export default card
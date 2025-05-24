import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

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

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
		es: "Shroomish",
		it: "Shroomish",
		pt: "Shroomish",
		de: "Knilz"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Yukiko Baba",

	description: {
		en: "It scatters poisonous spores and throws powerful punches while its foe is hampered by inhaled spores."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			es: "Golpe Cabeza",
			pt: "Cabeçada",
			it: "Bottintesta"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Impact Blow",
			fr: "Coup à Impact",
			de: "Einschlag",
			es: "Golpe Impactante",
			pt: "Golpe Impactante",
			it: "Colpoimpatto"
		},

		damage: 150,

		effect: {
			en: "During your next turn, this Pokémon can't use Impact Blow.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup à Impact.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Einschlag nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Impactante.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpoimpatto."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [467],
	set: Set,

	name: {
		en: "Magmortar",
		fr: "Maganon",
		es: "Magmortar",
		it: "Magmortar",
		pt: "Magmortar",
		de: "Magbrant"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			it: "Fiammata",
			pt: "Chama",
			de: "Flackern"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Volcanic Heat",
			fr: "Chaleur Volcanique",
			es: "Calor Volcánico",
			it: "Calore Vulcanico",
			pt: "Calor Vulcânico",
			de: "Vulkanhitze"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 170
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
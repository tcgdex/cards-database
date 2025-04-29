import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Lombre",
		fr: "Lombre",
		es: "Lombre",
		de: "Lombrero",
		it: "Lombre",
		pt: "Lombre",
		'es-mx': "Lombre"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Aqua Slash",
			fr: "Aqua Slash",
			es: "Cuchillada Acuática",
			de: "Aquaschlag",
			it: "Idrosquarcio",
			pt: "Aqua Corte",
			'es-mx': "Cuchillada Acuática"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Escavalier",
		fr: "Lançargot",
		es: "Escavalier",
		de: "Cavalanzas",
		it: "Escavalier",
		pt: "Escavalier",
		'es-mx': "Escavalier"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			de: "Durchbohren",
			it: "Perforare",
			pt: "Perfurar",
			'es-mx': "Perforar"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Iron Buster",
			fr: "Buster de Fer",
			es: "Destructor Férreo",
			de: "Eisensprenger",
			it: "Ferro Distruttivo",
			pt: "Destruidor Férreo",
			'es-mx': "Destructor Férreo"
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

		damage: 120
	}],

	retreat: 2,
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

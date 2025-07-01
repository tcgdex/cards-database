import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Steven's Metang",
		fr: "Métang de Pierre",
		de: "Troys Metang",
		it: "Metang di Rocco",
		es: "Metang de Máximo",
		pt: "Metang do Steven",
		'es-mx': "Metang de Steven"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Metal Slash",
			fr: "Tranche Métallique",
			de: "Metallschlitzer",
			it: "Lacerametallo",
			es: "Tajo Metálico",
			pt: "Talho de Metal",
			'es-mx': "Cuchillada Metálica"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		normal:false
	},

	variants_detailed: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	]
}

export default card

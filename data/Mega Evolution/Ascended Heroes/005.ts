import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [70],

	name: {
		en: "Erika's Weepinbell",
		fr: "Boustiflor d'Erika",
		es: "Weepinbell de Erika",
		'es-mx': "Weepinbell de Erika",
		de: "Erikas Ultrigaria",
		it: "Weepinbell di Erika",
		pt: "Weepinbell da Érica"
	},

	illustrator: "LINNE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Melt",
			fr: "Dissolution",
			es: "Derretir",
			'es-mx': "Derretir",
			de: "Schmelzen",
			it: "Liquefazione",
			pt: "Derreter"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Leafy Cyclone",
			fr: "Cyclone Arboré",
			es: "Ciclón Hojarasca",
			'es-mx': "Ciclón Frondoso",
			de: "Blättergewirbel",
			it: "Fogliaturbine",
			pt: "Ciclone Folhoso"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675817,
		cardmarket: 869616
	}
}

export default card
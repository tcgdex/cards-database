import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		fr: "Lougaroc V",
		de: "Wolwerock V",
		es: "Lycanroc V",
		pt: "Lycanroc V",
		it: "Lycanroc V",
		en: "Lycanroc V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Jet-Pierres",
			de: "Steinwurf",
			es: "Lanzarrocas",
			pt: "Lançamento de Rocha",
			it: "Sassata",
			en: "Rock Throw"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			fr: "Crocs Percutants",
			de: "Reißende Zähne",
			es: "Colmillos Demoledores",
			pt: "Caninos Estrondosos",
			it: "Schiantazanne",
			en: "Crashing Fangs"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			en: "During your next turn, this Pokémon can't attack."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card
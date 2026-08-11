import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		'fr-fr': "Lougaroc V",
		'de-de': "Wolwerock V",
		'es-es': "Lycanroc V",
		'pt-br': "Lycanroc V",
		'it-it': "Lycanroc V",
		'en-us': "Lycanroc V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Jet-Pierres",
			'de-de': "Steinwurf",
			'es-es': "Lanzarrocas",
			'pt-br': "Lançamento de Rocha",
			'it-it': "Sassata",
			'en-us': "Rock Throw"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'fr-fr': "Crocs Percutants",
			'de-de': "Reißende Zähne",
			'es-es': "Colmillos Demoledores",
			'pt-br': "Caninos Estrondosos",
			'it-it': "Schiantazanne",
			'en-us': "Crashing Fangs"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'en-us': "During your next turn, this Pokémon can't attack."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 584316
	}
}

export default card

import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [589],
	set: Set,

	name: {
		'en-us': "Escavalier",
		'fr-fr': "Lançargot",
		'es-es': "Escavalier",
		'de-de': "Cavalanzas",
		'it-it': "Escavalier",
		'pt-br': "Escavalier",
		'es-mx': "Escavalier"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing",
		'es-es': "Karrablast",
		'de-de': "Laukaps",
		'it-it': "Karrablast",
		'pt-br': "Karrablast",
		'es-mx': "Karrablast"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'de-de': "Durchbohren",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'es-mx': "Perforar"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Iron Buster",
			'fr-fr': "Buster de Fer",
			'es-es': "Destructor Férreo",
			'de-de': "Eisensprenger",
			'it-it': "Ferro Distruttivo",
			'pt-br': "Destruidor Férreo",
			'es-mx': "Destructor Férreo"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Takumi Wada",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817254,
				tcgplayer: 623529
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817254,
				tcgplayer: 623529
			}
		},
	],
}

export default card

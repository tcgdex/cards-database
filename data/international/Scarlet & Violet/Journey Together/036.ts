import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [271],
	set: Set,

	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'es-es': "Lombre",
		'de-de': "Lombrero",
		'it-it': "Lombre",
		'pt-br': "Lombre",
		'es-mx': "Lombre"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
		'es-es': "Lotad",
		'de-de': "Loturzel",
		'it-it': "Lotad",
		'pt-br': "Lotad",
		'es-mx': "Lotad"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Aqua Slash",
			'fr-fr': "Aqua Slash",
			'es-es': "Cuchillada Acuática",
			'de-de': "Aquaschlag",
			'it-it': "Idrosquarcio",
			'pt-br': "Aqua Corte",
			'es-mx': "Cuchillada Acuática"
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

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Mousho",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817188,
				tcgplayer: 623463
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817188,
				tcgplayer: 623463
			}
		},
	],
}

export default card

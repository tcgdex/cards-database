import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [520],
	set: Set,

	name: {
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
		'es-es': "Tranquill",
		'it-it': "Tranquill",
		'pt-br': "Tranquill",
		'de-de': "Navitaub"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Pidove",
		'fr-fr': "Poichigeon",
		'es-es': "Pidove",
		'it-it': "Pidove",
		'pt-br': "Pidove",
		'de-de': "Dusselgurr"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Speed Dive",
			'fr-fr': "Plongée Rapide",
			'es-es': "Picado Rápido",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'de-de': "Tempohechtsprung"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Jet Wing",
			'fr-fr': "Aile Jet",
			'es-es': "Ala Propulsión",
			'it-it': "Ala Jet",
			'pt-br': "Asa a Jato",
			'de-de': "Jet-Flügel"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "H",

	description: {
		'en-us': "It can fly moderately quickly. No matter how far it travels, it can always find its way back to its master and its nest.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760764,
				tcgplayer: 542878
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760764,
				tcgplayer: 542878
			}
		},
	],

	illustrator: "Pani Kobayashi",

}

export default card
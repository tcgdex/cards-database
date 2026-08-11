import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [286],
	set: Set,

	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'es-es': "Breloom",
		'it-it': "Breloom",
		'pt-br': "Breloom",
		'de-de': "Kapilz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
		'es-es': "Shroomish",
		'it-it': "Shroomish",
		'pt-br': "Shroomish",
		'de-de': "Knilz"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Punch",
			'fr-fr': "Koud'Poing",
			'es-es': "Puño",
			'it-it': "Pugno",
			'pt-br': "Soco",
			'de-de': "Boxhieb"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Knuckle Impact",
			'fr-fr': "Coup d'Articulations",
			'es-es': "Impacto Nudillo",
			'it-it': "Impatto Nocche",
			'pt-br': "Impacto Ossudo",
			'de-de': "Knöchelprall"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "The seeds on its tail are made of toxic spores. It knocks out foes with quick, virtually invisible punches.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760637,
				tcgplayer: 542653
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760637,
				tcgplayer: 542653
			}
		},
	],

	illustrator: "Taiga Kasai",

}

export default card
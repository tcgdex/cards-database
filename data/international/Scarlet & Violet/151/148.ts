import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [148],
	set: Set,

	name: {
		'fr-fr': "Draco",
		'en-us': "Dragonair",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
		'de-de': "Dragonir"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	evolveFrom: {
		'fr-fr': "Minidraco",
		'en-us': "Dratini",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
		'de-de': "Dratini"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Bataille",
			'en-us': "Beat",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 20
	}, {
		cost: ["Water", "Lightning"],

		name: {
			'fr-fr': "Aqua Slash",
			'en-us': "Aqua Slash",
			'es-es': "Cuchillada Acuática",
			'it-it': "Idrosquarcio",
			'pt-br': "Aqua Corte",
			'de-de': "Aquaschlag"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "During your next turn, this Pokémon can't attack.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "They say that if it emits an aura from its whole body, the weather will begin to change instantly.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733743,
				tcgplayer: 516711,
				cardtrader: 261170
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733743,
				tcgplayer: 516711,
				cardtrader: 261170
			}
		},
	],

	illustrator: "Sanosuke Sakuma",

	
}

export default card

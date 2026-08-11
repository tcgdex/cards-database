import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [467],
	set: Set,

	name: {
		'en-us': "Magmortar",
		'fr-fr': "Maganon",
		'es-es': "Magmortar",
		'it-it': "Magmortar",
		'pt-br': "Magmortar",
		'de-de': "Magbrant"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'de-de': "Magmar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'pt-br': "Chama",
			'de-de': "Flackern"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Volcanic Heat",
			'fr-fr': "Chaleur Volcanique",
			'es-es': "Calor Volcánico",
			'it-it': "Calore Vulcanico",
			'pt-br': "Calor Vulcânico",
			'de-de': "Vulkanhitze"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751536,
				tcgplayer: 534150,
				cardtrader: 274194
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751536,
				tcgplayer: 534150,
				cardtrader: 274194
			}
		},
	],

	illustrator: "Hasuno",

	description: {
		'en-us': "Living in the crater of a volcano has caused this Pokémon's body to resemble its environment— it has an organ similar to a magma chamber.",
	},

}

export default card

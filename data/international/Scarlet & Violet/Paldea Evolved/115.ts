import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [454],
	set: Set,

	name: {
		'fr-fr': "Coatox",
		'en-us': "Toxicroak",
		'es-es': "Toxicroak",
		'it-it': "Toxicroak",
		'pt-br': "Toxicroak",
		'de-de': "Toxiquak"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Cradopaud",
		'en-us': "Croagunk",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'pt-br': "Croagunk",
		'de-de': "Glibunkel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Transpercement",
			'en-us': "Pierce",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Griffes Articulées",
			'en-us': "Knuckle Claws",
			'es-es': "Garras Nudillo",
			'it-it': "Noccartigli",
			'pt-br': "Garras Articuladas",
			'de-de': "Knöchelkralle"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715590,
				tcgplayer: 497530,
				cardtrader: 248761
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715590,
				tcgplayer: 497530,
				cardtrader: 248761
			}
		},
	],

	illustrator: "Yuya Oka",

	description: {
		'en-us': "Swaying and dodging the attacks of its foes, it weaves its flexible body in close, then lunges out with its poisonous claws.",
	},
}

export default card

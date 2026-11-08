import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [88],
	set: Set,

	name: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'es-es': "Grimer",
		'it-it': "Grimer",
		'pt-br': "Grimer",
		'de-de': "Sleima"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Poison Gas",
			'fr-fr': "Gaz Toxik",
			'es-es': "Gas Venenoso",
			'it-it': "Velenogas",
			'pt-br': "Gás Venenoso",
			'de-de': "Giftwolke"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "The wastewater coming from factories is clean these days, so Grimer have nothing to eat. They're said to be on the verge of extinction.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608534,
				tcgplayer: 263800
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608534,
				tcgplayer: 263800
			}
		},
	],
}

export default card

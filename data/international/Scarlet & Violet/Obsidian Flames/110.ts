import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [438],
	set: Set,

	name: {
		'fr-fr': "Manzaï",
		'en-us': "Bonsly",
		'es-es': "Bonsly",
		'it-it': "Bonsly",
		'pt-br': "Bonsly",
		'de-de': "Mobai"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'fr-fr': "Pleurnicheries",
			'en-us': "Blubbering",
			'es-es': "Lagrimones",
			'it-it': "Piagnisteo",
			'pt-br': "Abrir o Berreiro",
			'de-de': "Plärren"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "In order to adjust the level of fluids in its body, it exudes water from its eyes. This makes it appear to be crying.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725190,
				tcgplayer: 509804,
				cardtrader: 255795
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725190,
				tcgplayer: 509804,
				cardtrader: 255795
			}
		},
	],

	illustrator: "Mizue",

	
}

export default card

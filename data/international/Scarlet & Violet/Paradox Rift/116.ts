import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [568],
	set: Set,

	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Suffocating Gas",
			'fr-fr': "Gaz Suffocant",
			'es-es': "Gas Sofocante",
			'it-it': "Gas Soffocante",
			'pt-br': "Gás Asfixiante",
			'de-de': "Würgegas"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Venomous Hit",
			'fr-fr': "Frappe Venimeuse",
			'es-es': "Golpe Venenoso",
			'it-it': "Colpo Velenoso",
			'pt-br': "Golpe Venenoso",
			'de-de': "Giftiger Schlag"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Its favorite places are unsanitary ones. If you leave trash lying around, you could even find one of these Pokémon living in your room.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740640,
				tcgplayer: 523790,
				cardtrader: 265229
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740640,
				tcgplayer: 523790,
				cardtrader: 265229
			}
		},
	],

	illustrator: "Miki Tanaka",

	
}

export default card

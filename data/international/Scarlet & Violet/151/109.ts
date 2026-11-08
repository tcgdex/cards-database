import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [109],
	set: Set,

	name: {
		'fr-fr': "Smogo",
		'en-us': "Koffing",
		'es-es': "Koffing",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'de-de': "Smogon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Gaz Suspect",
			'en-us': "Suspicious Gas",
			'es-es': "Gas Sospechoso",
			'it-it': "Gas Sospetto",
			'pt-br': "Gás Duvidoso",
			'de-de': "Verdächtiges Gas"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733704,
				tcgplayer: 516679,
				cardtrader: 261126
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733704,
				tcgplayer: 516679,
				cardtrader: 261126
			}
		},
	],

	illustrator: "Shibuzoh.",

	
}

export default card

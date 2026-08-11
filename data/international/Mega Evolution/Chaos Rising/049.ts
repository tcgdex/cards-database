import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
	},


	name: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'es-mx': "Zubat",
		'de-de': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat"
	},

	illustrator: "Mékayu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Supersonic",
			'fr-fr': "Ultrason",
			'es-es': "Supersónico",
			'es-mx': "Supersónico",
			'de-de': "Superschall",
			'it-it': "Supersuono",
			'pt-br': "Supersônico"
		},

		cost: ["Darkness"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886441,
				tcgplayer: 693565
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886441,
				tcgplayer: 693565
			}
		},
	],
}

export default card

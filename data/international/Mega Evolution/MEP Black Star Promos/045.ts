import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Popplio",
		'fr-fr': "Otaquin",
		'de-de': "Robball",
		'it-it': "Popplio",
		'es-es': "Popplio",
		'pt-br': "Popplio",
		'es-mx': "Popplio"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [728],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Disarming Voice",
			'fr-fr': "Voix Enjôleuse",
			'de-de': "Säuselstimme",
			'it-it': "Incantavoce",
			'es-es': "Voz Cautivadora",
			'pt-br': "Voz Desarmante",
			'es-mx': "Voz Cautivadora"
		},

		damage: 20,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		}
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 875194,
				tcgplayer: 684469
			}
		},
	],
}

export default card

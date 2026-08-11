import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [333],
	set: Set,

	name: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'es-es': "Swablu",
		'it-it': "Swablu",
		'pt-br': "Swablu",
		'de-de': "Wablu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Disarming Voice",
			'fr-fr': "Voix Enjôleuse",
			'es-es': "Voz Cautivadora",
			'it-it': "Incantavoce",
			'pt-br': "Voz Desarmante",
			'de-de': "Säuselstimme"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794521,
				tcgplayer: 590068
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794521,
				tcgplayer: 590068
			}
		},
	],
	
	illustrator: "sowsow",

}

export default card

import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [850],
	set: Set,

	name: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'es-es': "Sizzlipede",
		'it-it': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'de-de': "Thermopod"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	description: {
		'en-us': "It wraps prey up with its heated body, cooking them in its coils. Once they're well-done, it will voraciously nibble them down to the last morsel."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Singe",
			'fr-fr': "Roussi",
			'de-de': "Versengung",
			'es-es': "Quemadura",
			'pt-br': "Chamuscada",
			'it-it': "Scottata"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582181,
				tcgplayer: 253175
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582181,
				tcgplayer: 253175
			}
		},
	],
}

export default card

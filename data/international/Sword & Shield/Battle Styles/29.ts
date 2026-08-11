import { Card } from 'models/database/card'
import Set from '../Battle Styles'

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

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	attacks: [{
		name: {
			'en-us': "Searing Flame",
			'fr-fr': "Flammes Calcinantes",
			'es-es': "Llama Abrasadora",
			'it-it': "Fiamme Ustionanti",
			'pt-br': "Chama Cauterizante",
			'de-de': "Sengende Flammen"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It wraps prey up with its heated body, cooking them in its coils. Once they're well-done, it will voraciously nibble them down to the last morsel."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545056,
				tcgplayer: 234135
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545056,
				tcgplayer: 234135
			}
		},
	],
}

export default card

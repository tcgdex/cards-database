import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Detective Pikachu",
		'fr-fr': "Détective Pikachu",
		'es-es': "Detective Pikachu",
		'it-it': "Detective Pikachu",
		'pt-br': "Detective Pikachu",
		'de-de': "Meisterdetektiv Pikachu"
	},

	illustrator: "MPC Film",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Brilliant Deduction",
				'fr-fr': "Brillante Déduction",
				'es-es': "Brillante Deducción",
				'it-it': "Brillante Deduzione",
				'pt-br': "Dedução Brilhante",
				'de-de': "Brillante Schlussfolgerung"
			},
			effect: {
				'en-us': "Look at the top 4 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.",
				'fr-fr': "Regardez les 4 cartes du dessus de votre deck et ajoutez l’une d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
				'es-es': "Mira las 4 primeras cartas de tu baraja y pon 1 de ellas en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				'it-it': "Guarda le prime quattro carte del tuo mazzo e aggiungi una di esse alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
				'pt-br': "Olhe as 4 primeiras cartas do seu baralho e coloque 1 delas na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
				'de-de': "Schau dir die obersten 4 Karten deines Decks an und nimm 1 von ihnen auf deine Hand. Mische die anderen Karten zurück in dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Skilled in deduction, he's a self-proclaimed \"great detective.\" His detective hat is his trademark.",
	},
}

export default card

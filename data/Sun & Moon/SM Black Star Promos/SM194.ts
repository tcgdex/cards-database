import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Detective Pikachu",
		fr: "Détective Pikachu",
		es: "Detective Pikachu",
		it: "Detective Pikachu",
		pt: "Detective Pikachu",
		de: "Meisterdetektiv Pikachu"
	},

	illustrator: "MPC Film",
	rarity: "Rare",
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
				en: "Brilliant Deduction",
				fr: "Brillante Déduction",
				es: "Brillante Deducción",
				it: "Brillante Deduzione",
				pt: "Dedução Brilhante",
				de: "Brillante Schlussfolgerung"
			},
			effect: {
				en: "Look at the top 4 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.",
				fr: "Regardez les 4 cartes du dessus de votre deck et ajoutez l’une d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
				es: "Mira las 4 primeras cartas de tu baraja y pon 1 de ellas en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				it: "Guarda le prime quattro carte del tuo mazzo e aggiungi una di esse alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
				pt: "Olhe as 4 primeiras cartas do seu baralho e coloque 1 delas na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
				de: "Schau dir die obersten 4 Karten deines Decks an und nimm 1 von ihnen auf deine Hand. Mische die anderen Karten zurück in dein Deck."
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

	retreat: 2
}

export default card

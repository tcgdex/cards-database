import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Venonat",
		fr: "Mimitoss",
		es: "Venonat",
		it: "Venonat",
		pt: "Venonat",
		de: "Bluzuk"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		48,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Radar Eyes",
				fr: "Regard Radar",
				es: "Ojos de Radar",
				it: "Sguardo Radar",
				pt: "Olhos de Radar",
				de: "Radaraugen"
			},
			effect: {
				en: "Look at the top 7 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.",
				fr: "Regardez les 7 cartes du dessus de votre deck, puis ajoutez l’une d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
				es: "Mira las 7 primeras cartas de tu baraja y pon 1 de ellas en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				it: "Guarda le prime sette carte del tuo mazzo e aggiungi una di esse alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
				pt: "Olhe as 7 primeiras cartas do seu baralho e coloque 1 delas na sua mão. Embaralhe as demais cartas de volta no seu baralho.",
				de: "Schau dir die obersten 7 Karten deines Decks an und nimm 1 von ihnen auf deine Hand. Mische die anderen Karten zurück in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flop",
				fr: "Flop",
				es: "Vuelta",
				it: "Tonfo",
				pt: "Baque",
				de: "Plumps"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372302
	}
}

export default card

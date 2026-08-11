import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Delibird",
		'fr-fr': "Cadoizo",
		'es-es': "Delibird",
		'it-it': "Delibird",
		'pt-br': "Delibird",
		'de-de': "Botogel"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		225,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "All the Presents",
				'fr-fr': "Nombreux Cadeaux",
				'es-es': "Regalos por Doquier",
				'it-it': "Regali a Volontà",
				'pt-br': "Regado de Presentes",
				'de-de': "Geschenkeflut"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, vous pouvez chercher une carte dans votre deck puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, puedes buscar en tu baraja 1 carta y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, puoi cercare nel tuo mazzo una carta e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Jogue 1 moeda até sair coroa. Para cada cara, você poderá procurar por 1 carta no seu baralho e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Du kannst pro Kopf dein Deck nach 1 Karte durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Surprise Attack",
				'fr-fr': "Attaque Surprise",
				'es-es': "Ataque Sorpresa",
				'it-it': "Attacco a Sorpresa",
				'pt-br': "Ataque Surpresa",
				'de-de': "Überraschungsangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Although it naturally prefers colder locales, Delibird in Alola seem able to withstand the heat to a certain extent.",
	},

	thirdParty: {
		cardmarket: 297488,
		tcgplayer: 130926
	}
}

export default card

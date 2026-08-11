import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Alolan Vulpix",
		'fr-fr': "Goupix d’Alola",
		'es-es': "Vulpix de Alola",
		'it-it': "Vulpix di Alola",
		'pt-br': "Vulpix de Alola",
		'de-de': "Alola Vulpix"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Beacon",
				'fr-fr': "Flambeau",
				'es-es': "Señal",
				'it-it': "Faro",
				'pt-br': "Baliza",
				'de-de': "Lichtsignal"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Icy Snow",
				'fr-fr': "Verglas",
				'es-es': "Nieve Helada",
				'it-it': "Geloneve",
				'pt-br': "Neve Congelada",
				'de-de': "Eisiger Schnee"
			},

			damage: 20,

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
		'en-us': "It exhales air colder than -58 degrees Fahrenheit. Elderly people in Alola call this Pokémon by an older name—Keokeo.",
	},

	thirdParty: {
		cardmarket: 297485,
		tcgplayer: 130919
	}
}

export default card

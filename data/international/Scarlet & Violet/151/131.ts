import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		'fr-fr': "Lokhlass",
		'en-us': "Lapras",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Grimpe sur mon Dos",
			'en-us': "Hop on My Back",
			'es-es': "Súbete a mi Lomo",
			'it-it': "Monta Su",
			'pt-br': "Na Garupa",
			'de-de': "Spring auf meinen Rücken"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Aqua-Dague",
			'en-us': "Aqua Edge",
			'es-es': "Filo Agua",
			'it-it': "Acquataglio",
			'pt-br': "Aqua Gume",
			'de-de': "Aquaschneide"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Crossing icy seas is no issue for this cold-resistant Pokémon. Its smooth skin is a little cool to the touch.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733726,
				tcgplayer: 516694,
				cardtrader: 261190
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733726,
				tcgplayer: 516694,
				cardtrader: 261190
			}
		},
	],

	illustrator: "LINNE",

	
}

export default card

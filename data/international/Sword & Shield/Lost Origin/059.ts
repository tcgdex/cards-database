import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [602],
	set: Set,

	name: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'de-de': "Zapplardin"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Call Sign",
			'fr-fr': "Signe d'Appel",
			'es-es': "Señal de Llamada",
			'it-it': "Chiamata",
			'pt-br': "Sinal de Chamada",
			'de-de': "Rufzeichen"
		},

		effect: {
			'en-us': "Search your deck for a Lightning Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon Lightning, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon Lightning, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Lightning, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 Pokémon Lightning no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Lightning-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'en-us': "Tiny Charge",
			'fr-fr': "Décharge Mineure",
			'es-es': "Carga Diminuta",
			'it-it': "Sottocarica Minuscola",
			'pt-br': "Carga Pequenina",
			'de-de': "Mini-Stromstoß"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674068,
				tcgplayer: 283933
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674068,
				tcgplayer: 283933
			}
		},
	],
}

export default card

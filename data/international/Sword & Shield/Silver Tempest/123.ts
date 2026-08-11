import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [599],
	set: Set,

	name: {
		'en-us': "Klink",
		'fr-fr': "Tic",
		'es-es': "Klink",
		'it-it': "Klink",
		'pt-br': "Klink",
		'de-de': "Klikk"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Call Sign",
			'fr-fr': "Signe d'Appel",
			'es-es': "Señal de Llamada",
			'it-it': "Chiamata",
			'pt-br': "Sinal de Chamada",
			'de-de': "Rufzeichen"
		},

		effect: {
			'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The two minigears that compose this Pokémon are closer than twins. They mesh well only with each other.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682170,
				tcgplayer: 451776
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682170,
				tcgplayer: 451776
			}
		},
	],
}

export default card

import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [856],

	name: {
		'en-us': "Hatenna",
		'fr-fr': "Bibichut",
		'es-es': "Hatenna",
		'it-it': "Hatenna",
		'pt-br': "Hatenna",
		'de-de': "Brimova"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Find a Friend",
				'fr-fr': "Trouver un Ami",
				'es-es': "Encontrar un Amigo",
				'it-it': "Trovamico",
				'pt-br': "Encontre um Amigo",
				'de-de': "Freunde finden"
			},
			effect: {
				'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
				'es-es': "Disparo Psi",
				'it-it': "Psicosparo",
				'pt-br': "Tiro Psíquico",
				'de-de': "Psychoschuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Via the protrusion on its head, it senses other creatures' emotions. If you don't have a calm disposition, it will never warm up to you."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457833,
				tcgplayer: 213169
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457833,
				tcgplayer: 213169
			}
		},
	],
}

export default card

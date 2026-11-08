import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [247],

	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'es-es': "Larvitar",
		'it-it': "Larvitar",
		'pt-br': "Larvitar",
		'de-de': "Larvitar"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sand Spray",
				'fr-fr': "Jet Sableux",
				'es-es': "Rociado de Arena",
				'it-it': "Silicospruzzo",
				'pt-br': "Spray de Areia",
				'de-de': "Sandspray"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rocket Evolution",
				'fr-fr': "Évolution Express",
				'es-es': "Evolución Cohete",
				'it-it': "Evoluzione Razzo",
				'pt-br': "Evolução a Jato",
				'de-de': "Raketenentwicklung"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck une carte Évolution de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Even sealed in its shell, it can move freely. Hard and fast, it has outstanding destructive power."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483314,
				tcgplayer: 219476
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483314,
				tcgplayer: 219476
			}
		},
	],
}

export default card

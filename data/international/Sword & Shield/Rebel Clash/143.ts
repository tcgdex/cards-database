import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [519],

	name: {
		'en-us': "Pidove",
		'fr-fr': "Poichigeon",
		'es-es': "Pidove",
		'it-it': "Pidove",
		'pt-br': "Pidove",
		'de-de': "Dusselgurr"
	},

	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Chirp",
				'fr-fr': "Gazouillis",
				'es-es': "Gorjeo",
				'it-it': "Cinguettio",
				'pt-br': "Gorjeio",
				'de-de': "Zwitscherer"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Pokémon with Fighting Resistance, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon avec une Résistance Fighting, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 Pokémon con Resistencia a Fighting, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due Pokémon con resistenza al tipo Fighting, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 Pokémon com Resistência Fighting no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon mit Fighting-Resistenz, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Wing",
				'fr-fr': "Aile Tranchante",
				'es-es': "Ala Cortante",
				'it-it': "Ala Tagliente",
				'pt-br': "Asa Cortante",
				'de-de': "Rasierflügel"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
	types: ["Colorless"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Where people go, these Pokémon follow. If you're scattering food for them, be careful—several hundred of them can gather at once."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458103,
				tcgplayer: 213243
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458103,
				tcgplayer: 213243
			}
		},
	],
}

export default card

import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [358],

	name: {
		'en-us': "Chimecho",
		'fr-fr': "Éoko",
		'es-es': "Chimecho",
		'it-it': "Chimecho",
		'pt-br': "Chimecho",
		'de-de': "Palimpalim"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Auspicious Tone",
				'fr-fr': "Mélodie Bienveillante",
				'es-es': "Tono Auspiciador",
				'it-it': "Tono Fausto",
				'pt-br': "Tom Auspicioso",
				'de-de': "Verheißungsvoller Klang"
			},
			effect: {
				'en-us': "Search your deck for a Pokémon and a Supporter card, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck un Pokémon et une carte Supporter, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Pokémon y 1 carta de Partidario, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Pokémon e una carta Aiuto, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 Pokémon e 1 carta de Apoiador no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Pokémon und 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'es-es': "Hipnorrayo",
				'it-it': "Ipnobomba",
				'pt-br': "Borrifada Hipnótica",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

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
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Emitting ultrasonic cries, it floats on winds to travel great distances."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511780,
				tcgplayer: 226480
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511780,
				tcgplayer: 226480
			}
		},
	],
}

export default card

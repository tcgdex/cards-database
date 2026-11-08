import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako",
		'es-es': "Chatot",
		'it-it': "Chatot",
		'pt-br': "Chatot",
		'de-de': "Plaudagei"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		441,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mimic",
				'fr-fr': "Copie",
				'es-es': "Mimético",
				'it-it': "Mimica",
				'pt-br': "Mímica",
				'de-de': "Mimikry"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw a card for each card in your opponent’s hand.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival.",
				'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
				'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 1 carta para cada carta na mão do seu oponente.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tone-Deaf",
				'fr-fr': "Dur d’Oreille",
				'es-es': "Mal Oído",
				'it-it': "Sordotono",
				'pt-br': "Desafinar",
				'de-de': "Unmusikalisch"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 10,

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It mimics the cries of other Pokémon to trick them into thinking it's one of them. This way they won't attack it.",
	},

	thirdParty: {
		cardmarket: 372450,
		tcgplayer: 189264
	}
}

export default card

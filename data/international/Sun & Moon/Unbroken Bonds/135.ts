import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Wigglytuff",
		'fr-fr': "Grodoudou",
		'es-es': "Wigglytuff",
		'it-it': "Wigglytuff",
		'pt-br': "Wigglytuff",
		'de-de': "Knuddeluff"
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Orb Polish",
				'fr-fr': "Orbe Lustré",
				'es-es': "Pulidor de Orbes",
				'it-it': "Lucidasfera",
				'pt-br': "Polimento de Esfera",
				'de-de': "Orbpolitur"
			},
			effect: {
				'en-us': "Put 3 Energy cards from your discard pile into your hand.",
				'fr-fr': "Ajoutez 3 cartes Énergie de votre pile de défausse à votre main.",
				'es-es': "Pon 3 cartas de Energía de tu pila de descartes en tu mano.",
				'it-it': "Prendi tre carte Energia dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 3 cartas de Energia da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 3 Energiekarten aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sleepy Ball",
				'fr-fr': "Boule Dodo",
				'es-es': "Bola Soporífera",
				'it-it': "Sonnopalla",
				'pt-br': "Bola Sonolenta",
				'de-de': "Schlafball"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Thanks to its bouncy body and fine fur, this Pokémon is sought after. Holding one in your arms while you sleep feels great.",
	},

	thirdParty: {
		cardmarket: 372422,
		tcgplayer: 189233
	}
}

export default card

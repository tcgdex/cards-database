import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Lumineon",
		'fr-fr': "Luminéon",
		'es-es': "Lumineon",
		'it-it': "Lumineon",
		'pt-br': "Lumineon",
		'de-de': "Lumineon"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		457,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Finneon",
		'fr-fr': "Écayon",
		'es-es': "Finneon",
		'it-it': "Finneon",
		'pt-br': "Finneon",
		'de-de': "Finneon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Neon Sign",
				'fr-fr': "Appel Lumineux",
				'es-es': "Señal de Neón",
				'it-it': "Segnale Neon",
				'pt-br': "Placa de Neon",
				'de-de': "Leuchtzeichen"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 2 Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 Pokémon, enséñalos y ponlos en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a due Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure no seu baralho até 2 Pokémon, revele-os e coloque-os na mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
				'es-es': "Hidropulso",
				'it-it': "Idropulsar",
				'pt-br': "Pulso d'Água",
				'de-de': "Aquawelle"
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
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives on the deep-sea floor. It attracts prey by flashing the patterns on its four tail fins.",
	},

	thirdParty: {
		cardmarket: 281823,
		tcgplayer: 94152
	}
}

export default card

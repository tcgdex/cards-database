import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'es-es': "Shaymin",
		'it-it': "Shaymin",
		'pt-br': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Coax",
				'fr-fr': "Amadouer",
				'es-es': "Llamar con Gestos",
				'it-it': "Vieniqui",
				'pt-br': "Chamar com Acenos",
				'de-de': "Heranwinken"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Basic Pokémon of different types and put them onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 3 Pokémon de base de différents types dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 Pokémon Básicos de diferentes tipos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Base di tipo diverso e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 3 Pokémon Básicos de tipos diferentes no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon verschiedenen Typs und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Soothing Scent",
				'fr-fr': "Senteur Apaisante",
				'es-es': "Aroma Sedante",
				'it-it': "Aroma Calmante",
				'pt-br': "Odor Calmante",
				'de-de': "Beruhigender Duft"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
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
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers.",
	},

	thirdParty: {
		cardmarket: 315946,
		tcgplayer: 157632
	}
}

export default card

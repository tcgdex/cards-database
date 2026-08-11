import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'es-es': "Delcatty",
		'it-it': "Delcatty",
		'pt-br': "Delcatty",
		'de-de': "Enekoro"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		301,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'it-it': "Skitty",
		'pt-br': "Skitty",
		'de-de': "Eneco"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Salon",
				'fr-fr': "Distributeur d'Énergie",
				'es-es': "Salón de Energía",
				'it-it': "Centro Benessere",
				'pt-br': "Salão de Energia",
				'de-de': "Energiesalon"
			},
			effect: {
				'en-us': "Search your deck for up to 3 different types of basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 3 différents types de cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 tipos diferentes de cartas de Energía Básica, enséñalas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a tre carte Energia base di tipo diverso, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure no seu baralho até 3 tipos diferentes de cards de Energia básica, revele-os e coloque-os na sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 3 vom Typ her unterschiedlichen Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fake Out",
				'fr-fr': "Bluff",
				'es-es': "Sorpresa",
				'it-it': "Bruciapelo",
				'pt-br': "Fingimento",
				'de-de': "Mogelhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It dislikes dirty places. It often searches for a comfortable place in which to groom itself.",
	},

	thirdParty: {
		cardmarket: 281442,
		tcgplayer: 84743
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Kyurem",
		'fr-fr': "Kyurem",
		'es-es': "Kyurem",
		'it-it': "Kyurem",
		'pt-br': "Kyurem",
		'de-de': "Kyurem"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call Forth Cold",
				'fr-fr': "Appel au Froid",
				'es-es': "Convocar Frío",
				'it-it': "Richiamo del Freddo",
				'pt-br': "Invocar Frio",
				'de-de': "Kälteruf"
			},
			effect: {
				'en-us': "Search your deck for a Water Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez une carte Énergie Water dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Water y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Energia Water e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Energia Water no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Water-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hail Prison",
				'fr-fr': "Prison de Grêle",
				'es-es': "Prisión de Granizo",
				'it-it': "Prigione di Grandine",
				'pt-br': "Prisão de Granizo",
				'de-de': "Hagelknast"
			},
			effect: {
				'en-us': "Discard 2 Water Energy from this Pokémon. Your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Défaussez 2 Énergies Water de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Descarta 2 Energías Water de este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Scarta due Energie Water assegnate a questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Descarte 2 Energias Water deste Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
				'de-de': "Lege 2 Water-Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This legendary ice Pokémon waits for a hero to fill in the missing parts of its body with truth or ideals.",
	},

	thirdParty: {
		cardmarket: 372341,
		tcgplayer: 189149
	}
}

export default card

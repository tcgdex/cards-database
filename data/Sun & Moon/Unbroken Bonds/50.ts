import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Kyurem",
		fr: "Kyurem",
		es: "Kyurem",
		it: "Kyurem",
		pt: "Kyurem",
		de: "Kyurem"
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
				en: "Call Forth Cold",
				fr: "Appel au Froid",
				es: "Convocar Frío",
				it: "Richiamo del Freddo",
				pt: "Invocar Frio",
				de: "Kälteruf"
			},
			effect: {
				en: "Search your deck for a Water Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Water dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Water y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia Water e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia Water no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Water-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hail Prison",
				fr: "Prison de Grêle",
				es: "Prisión de Granizo",
				it: "Prigione di Grandine",
				pt: "Prisão de Granizo",
				de: "Hagelknast"
			},
			effect: {
				en: "Discard 2 Water Energy from this Pokémon. Your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Défaussez 2 Énergies Water de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Descarta 2 Energías Water de este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Scarta due Energie Water assegnate a questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Descarte 2 Energias Water deste Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
				de: "Lege 2 Water-Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
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



}

export default card

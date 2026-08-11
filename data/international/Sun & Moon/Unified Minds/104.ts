import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Steelix",
		'fr-fr': "Steelix",
		'es-es': "Steelix",
		'it-it': "Steelix",
		'pt-br': "Steelix",
		'de-de': "Stahlos"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 170,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Onix",
		'fr-fr': "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Ground Stream",
				'fr-fr': "Ruisseau Terrestre",
				'es-es': "Flujo Tierra",
				'it-it': "Geoflusso",
				'pt-br': "Fluxo Terrestre",
				'de-de': "Landstrom"
			},
			effect: {
				'en-us': "Attach 2 Fighting Energy cards from your discard pile to this Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie Fighting de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 2 cartas de Energía Fighting de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon due carte Energia Fighting dalla tua pila degli scarti.",
				'pt-br': "Ligue 2 cartas de Energia Fighting da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 2 Fighting-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gigaton Shake",
				'fr-fr': "Secousse Gigatonne",
				'es-es': "Sacudida Gigatón",
				'it-it': "Scossone Gigatonico",
				'pt-br': "Agito Gigatônico",
				'de-de': "Gigatonnen-Erschütterung"
			},
			effect: {
				'en-us': "During your next turn, your Pokémon can’t attack. (This includes Pokémon that come into play on that turn.)",
				'fr-fr': "Pendant votre prochain tour, vos Pokémon ne peuvent pas attaquer. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour.)",
				'es-es': "Durante tu próximo turno, tus Pokémon no pueden atacar. (Esto incluye Pokémon que entran en juego en ese turno).",
				'it-it': "Durante il tuo prossimo turno, i tuoi Pokémon non possono attaccare, inclusi i Pokémon entrati in gioco in quel turno.",
				'pt-br': "Durante a sua próxima vez de jogar, seus Pokémon não podem atacar (isto inclui Pokémon que entrarem em jogo naquela rodada).",
				'de-de': "Während deines nächsten Zuges können deine Pokémon nicht angreifen. (Dies schließt Pokémon, die während jenes Zuges ins Spiel gebracht werden, ein.)"
			},
			damage: 220,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Tempered underground under high pressure and heat, its body is harder than any metal.",
	},

	thirdParty: {
		cardmarket: 388327,
		tcgplayer: 195045
	}
}

export default card

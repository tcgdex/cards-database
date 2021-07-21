import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
		es: "Steelix",
		it: "Steelix",
		pt: "Steelix",
		de: "Stahlos"
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
		en: "Onix",
		fr: "Onix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Ground Stream",
				fr: "Ruisseau Terrestre",
				es: "Flujo Tierra",
				it: "Geoflusso",
				pt: "Fluxo Terrestre",
				de: "Landstrom"
			},
			effect: {
				en: "Attach 2 Fighting Energy cards from your discard pile to this Pokémon.",
				fr: "Attachez 2 cartes Énergie Fighting de votre pile de défausse à ce Pokémon.",
				es: "Une 2 cartas de Energía Fighting de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon due carte Energia Fighting dalla tua pila degli scarti.",
				pt: "Ligue 2 cartas de Energia Fighting da sua pilha de descarte a este Pokémon.",
				de: "Lege 2 Fighting-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
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
				en: "Gigaton Shake",
				fr: "Secousse Gigatonne",
				es: "Sacudida Gigatón",
				it: "Scossone Gigatonico",
				pt: "Agito Gigatônico",
				de: "Gigatonnen-Erschütterung"
			},
			effect: {
				en: "During your next turn, your Pokémon can’t attack. (This includes Pokémon that come into play on that turn.)",
				fr: "Pendant votre prochain tour, vos Pokémon ne peuvent pas attaquer. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour.)",
				es: "Durante tu próximo turno, tus Pokémon no pueden atacar. (Esto incluye Pokémon que entran en juego en ese turno).",
				it: "Durante il tuo prossimo turno, i tuoi Pokémon non possono attaccare, inclusi i Pokémon entrati in gioco in quel turno.",
				pt: "Durante a sua próxima vez de jogar, seus Pokémon não podem atacar (isto inclui Pokémon que entrarem em jogo naquela rodada).",
				de: "Während deines nächsten Zuges können deine Pokémon nicht angreifen. (Dies schließt Pokémon, die während jenes Zuges ins Spiel gebracht werden, ein.)"
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



}

export default card

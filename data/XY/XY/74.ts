import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		de: "Iscalar"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		686,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Upside-Down Evolution",
				fr: "Évolution Tête en Bas",
				es: "Evolución Bocabajo",
				it: "Evoluzione Sottosopra",
				pt: "Evolução de Cabeça para Baixo",
				de: "Umgedrehte Entwicklung"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is Confused, you may search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est Confus, vous pouvez chercher dans votre deck une carte Évolution de ce Pokémon et la placer sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está Confundido, puedes buscar en tu baraja 1 carta que evolucione de este Pokémon y ponerla sobre este Pokémon. (Esto equivale a hacer evolucionar a este Pokémon). Baraja las cartas de tu baraja después.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è confuso, puoi cercare nel tuo mazzo una carta che si evolve da questo Pokémon e mettergliela sopra (quest'azione vale come evoluzione del Pokémon). Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver Confuso, procure em seu baralho um card que evolua deste Pokémon e coloque-o nesse Pokémon. (Isso conta como evoluir esse Pokémon.) Em seguida, embaralhe seus cards.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dieses Pokémon verwirrt ist, dein Deck nach 1 Karte durchsuchen, zu der sich dieses Pokémon entwickelt, und sie auf dieses Pokémon legen (dies zählt als Entwicklung dieses Pokémon). Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Confusion Wave",
				fr: "Vague de Confusion",
				es: "Ola de Confusión",
				it: "Confusionda",
				pt: "Onda de Confusão",
				de: "Verwirrende Welle"
			},
			effect: {
				en: "Both Active Pokémon are now Confused.",
				fr: "Les deux Pokémon Actifs sont maintenant Confus.",
				es: "Ambos Pokémon Activos pasan a estar Confundidos.",
				it: "Entrambi i Pokémon attivi vengono confusi.",
				pt: "Ambos os Pokémon Ativos agora estão Confusos.",
				de: "Beide Aktiven Pokémon sind jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281411
	}
}

export default card

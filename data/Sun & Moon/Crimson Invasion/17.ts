import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
	},
	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		129,
	],
	hp: 30,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Submerge",
				fr: "Submerger",
				es: "Hundir",
				it: "Immergersi",
				pt: "Submergir",
				de: "Untertauchen"
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent’s).",
				fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
				es: "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como de tu rival).",
				it: "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon dagli attacchi, sia tuoi che del tuo avversario.",
				pt: "Desde que este Pokémon esteja em seu Banco, previne todos os danos causados a este Pokémon por ataques (seus e do seu oponente).",
				de: "Solang sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Angriffe (deine und die deines Gegners) zugefügt wird."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Waterfall Evolution",
				fr: "Évolution en Cascade",
				es: "Evolución Cascada",
				it: "Cascata Evolutiva",
				pt: "Cachoeira de Evolução",
				de: "Kaskadenentwicklung"
			},
			effect: {
				en: "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card

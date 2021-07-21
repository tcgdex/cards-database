import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Skelénox",
		es: "Duskull",
		it: "Duskull",
		pt: "Duskull",
		de: "Zwirrlicht"
	},
	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		355,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Spiritborne Evolution",
				fr: "Évolution Spirituelle",
				es: "Evolución Espiritual",
				it: "Evoluzione Spiritica",
				pt: "Evolução Transcendental",
				de: "Überirdische Entwicklung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard 3 cards from your hand. If you do, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser 3 cartes de votre main. Dans ce cas, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 3 cartas de tu mano. Si lo haces, busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare tre carte che hai in mano. Se lo fai, cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 3 cartas da sua mão. Se fizer isto, procure por 1 carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 3 Karten aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Ominous Eyes",
				fr: "Regard Menaçant",
				es: "Ojos Aciagos",
				it: "Sguardo Malevolo",
				pt: "Olhos Tenebrosos",
				de: "Unheilvolle Augen"
			},
			effect: {
				en: "Put 2 damage counters on 1 of your opponent’s Pokémon.",
				fr: "Placez 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
				es: "Pon 2 contadores de daño en 1 de los Pokémon de tu rival.",
				it: "Metti due segnalini danno su uno dei Pokémon del tuo avversario.",
				pt: "Coloque 2 contadores de dano em 1 dos Pokémon do seu oponente.",
				de: "Lege 2 Schadensmarken auf 1 Pokémon deines Gegners."
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card

import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma",
		es: "Rotom",
		it: "Rotom",
		pt: "Rotom",
		de: "Rotom"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Extract",
				fr: "Extraction d'Énergie",
				es: "Extracción de Energía",
				it: "Estrazione Energia",
				pt: "Extrair Energia",
				de: "Energieanziehung"
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Básica y únela a este Pokémon. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo una carta Energia base e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho um card de Energia básica e ligue-o a este Pokémon. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Plasmagic",
				fr: "Plasmagie",
				es: "Plasmágico",
				it: "Plasmatrucco",
				pt: "Magiplasma",
				de: "Plasmagie"
			},
			effect: {
				en: "Move 2 damage counters from each of your Pokémon to your opponent's Active Pokémon.",
				fr: "Déplacez 2 marqueurs de dégâts de chacun de vos Pokémon vers le Pokémon Actif de votre adversaire.",
				es: "Mueve 2 contadores de daño de cada uno de tus Pokémon al Pokémon Activo de tu rival.",
				it: "Sposta due segnalini danno da ciascuno dei tuoi Pokémon al Pokémon attivo del tuo avversario.",
				pt: "Mova 2 contadores de danos de cada um dos seus Pokémon ao Pokémon Ativo do seu oponente.",
				de: "Verschiebe 2 Schadensmarken von jedem deiner Pokémon auf das Aktive Pokémon deines Gegners."
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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card

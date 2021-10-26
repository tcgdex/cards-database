import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi",
		es: "Celebi",
		it: "Celebi",
		pt: "Celebi",
		de: "Celebi"
	},

	illustrator: "5ban Graphics",
	rarity: "Amazing",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Energy Press",
				fr: "Pression Énergétique",
				es: "Presión Energética",
				it: "Energipressa",
				pt: "Aperto de Energia",
				de: "Energiedruck"
			},
			effect: {
				en: "This attack does 30 damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Lightning",
				"Psychic",
			],
			name: {
				en: "Amazing Bloom",
				fr: "Floraison Magnifique",
				es: "Floración Increíble",
				it: "Fioritura Policroma",
				pt: "Florescimento Incrível",
				de: "Atemberaubende Blüte"
			},
			effect: {
				en: "For each of your Benched Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Pour chacun de vos Pokémon de Banc, cherchez dans votre deck une carte Évolution de ce Pokémon-là, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
				es: "Por cada uno de tus Pokémon en Banca, busca en tu baraja 1 carta que evolucione de ese Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
				it: "Per ogni Pokémon nella tua panchina, cerca nel tuo mazzo una carta che si evolve da quel Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
				pt: "Para cada um dos seus Pokémon no Banco, procure por 1 carta no seu baralho que evolua daquele Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche für jedes Pokémon auf deiner Bank dein Deck nach 1 Karte, die sich aus jenem Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "This Pokémon has the ability to move through time. Records describing it as a forest deity can be found from many different eras."
	}
}

export default card

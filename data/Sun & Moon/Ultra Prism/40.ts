import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Wash Rotom",
		fr: "Motisma Lavage",
		es: "Rotom Lavado",
		it: "Rotom Lavaggio",
		pt: "Rotom Lavagem",
		de: "Wasch-Rotom"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Roto Motor",
				fr: "Moti-Moteur",
				es: "Motor Rotom",
				it: "Rotomotore",
				pt: "Rotom Motor",
				de: "Roto-Motor"
			},
			effect: {
				en: "If you have 9 or more Pokémon Tool cards in your discard pile, ignore all Energy in the attack cost of each of this Pokémon’s attacks.",
				fr: "Si vous avez 9 cartes Outil Pokémon ou plus dans votre pile de défausse, ignorez toutes les Énergies dans le coût d’attaque de chacune des attaques de ce Pokémon.",
				es: "Si tienes 9 o más cartas de Herramienta Pokémon en tu pila de descartes, ignora todas las Energías en el coste de los ataques de este Pokémon.",
				it: "Se hai nove o più carte Oggetto Pokémon nella tua pila degli scarti, ignora tutte le Energie necessarie per usare ciascuno degli attacchi di questo Pokémon.",
				pt: "Se você tiver 9 ou mais cartas de Ferramenta Pokémon na sua pilha de descarte, ignore todas as Energias no custo do ataque de cada ataque deste Pokémon.",
				de: "Wenn du 9 Pokémon-Ausrüstungen oder mehr in deinem Ablagestapel hast, ignoriere alle Energien in den Attackenkosten jeder Attacke dieses Pokémon."
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
				en: "Wash Arrow",
				fr: "Flèche de Lavage",
				es: "Flecha Lavado",
				it: "Freccia Lavaggio",
				pt: "Lavagem de Flecha",
				de: "Waschpfeil"
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 50 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card

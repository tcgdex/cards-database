import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Frost Rotom",
		'fr-fr': "Motisma Froid",
		'es-es': "Rotom Frío",
		'it-it': "Rotom Gelo",
		'pt-br': "Rotom Congelante",
		'de-de': "Frost-Rotom"
	},

	illustrator: "MAHOU",
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
				'en-us': "Roto Motor",
				'fr-fr': "Moti-Moteur",
				'es-es': "Motor Rotom",
				'it-it': "Rotomotore",
				'pt-br': "Rotom Motor",
				'de-de': "Roto-Motor"
			},
			effect: {
				'en-us': "If you have 9 or more Pokémon Tool cards in your discard pile, ignore all Energy in the attack cost of each of this Pokémon’s attacks.",
				'fr-fr': "Si vous avez 9 cartes Outil Pokémon ou plus dans votre pile de défausse, ignorez toutes les Énergies dans le coût d’attaque de chacune des attaques de ce Pokémon.",
				'es-es': "Si tienes 9 o más cartas de Herramienta Pokémon en tu pila de descartes, ignora todas las Energías en el coste de los ataques de este Pokémon.",
				'it-it': "Se hai nove o più carte Oggetto Pokémon nella tua pila degli scarti, ignora tutte le Energie necessarie per usare ciascuno degli attacchi di questo Pokémon.",
				'pt-br': "Se você tiver 9 ou mais cartas de Ferramenta Pokémon na sua pilha de descarte, ignore todas as Energias no custo do ataque de cada ataque deste Pokémon.",
				'de-de': "Wenn du 9 Pokémon-Ausrüstungen oder mehr in deinem Ablagestapel hast, ignoriere alle Energien in den Attackenkosten jeder Attacke dieses Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Frost Crush",
				'fr-fr': "Écrasement Froid",
				'es-es': "Comprimir Frío",
				'it-it': "Rompigelo",
				'pt-br': "Esmagada Congelante",
				'de-de': "Frostschmettern"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Energy attached to all of your opponent’s Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées aux Pokémon de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida a todos los Pokémon de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai Pokémon del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia ligada a todos os Pokémon do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an alle Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its body is composed of plasma. It is known to infiltrate electronic devices and wreak havoc.",
	},

	thirdParty: {
		cardmarket: 315971,
		tcgplayer: 157658
	}
}

export default card

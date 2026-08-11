import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Heat Rotom",
		'fr-fr': "Motisma Chaleur",
		'es-es': "Rotom Calor",
		'it-it': "Rotom Calore",
		'pt-br': "Rotom Calor",
		'de-de': "Hitze-Rotom"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		479,
	],

	hp: 90,

	types: [
		"Fire",
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
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de Chaleur",
				'es-es': "Explosión de Calor",
				'it-it': "Caldobomba",
				'pt-br': "Raio de Calor",
				'de-de': "Hitzestoß"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its body is composed of plasma. It is known to infiltrate electronic devices and wreak havoc.",
	},

	thirdParty: {
		cardmarket: 315955,
		tcgplayer: 157641
	}
}

export default card

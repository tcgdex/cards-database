import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Anorith",
		'fr-fr': "Anorith",
		'es-es': "Anorith",
		'it-it': "Anorith",
		'pt-br': "Anorith",
		'de-de': "Anorith"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		347,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "RESTORED",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Restored Barrier",
				'fr-fr': "Bouclier Recréé",
				'es-es': "Barrera de Recreados",
				'it-it': "Barriera Ricreazione",
				'pt-br': "Barreira Restaurada",
				'de-de': "Erweckte Barriere"
			},
			effect: {
				'en-us': "Each of your Restored Pokémon has no Weakness.",
				'fr-fr': "Aucun de vos Pokémon Recréés n'a de Faiblesse.",
				'es-es': "Ninguno de tus Pokémon Recreados tiene Debilidad.",
				'it-it': "Nessuno dei tuoi Pokémon Ricreati ha debolezza.",
				'pt-br': "Cada um de seus Pokémon Restaurados não possui Fraqueza.",
				'de-de': "Keins deiner Erweckt-Pokémon hat eine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "X-Scissor",
				'fr-fr': "Plaie-Croix",
				'es-es': "Tijera X",
				'it-it': "Forbice X",
				'pt-br': "Tesoura X",
				'de-de': "Kreuzschere"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	evolveFrom: {
		'en-us': "Claw Fossil",
		'fr-fr': "Fossile Griffe",
		'es-es': "Fósil Garra",
		'it-it': "Fossilunghia",
		'pt-br': "Claw Fossil",
		'de-de': "Klauenfossil"
	},

	description: {
		'en-us': "A Pokémon ancestor that was reanimated from a fossil. It lived in the sea and hunted with claws.",
	},

	thirdParty: {
		cardmarket: 291626,
		tcgplayer: 121186
	}
}

export default card

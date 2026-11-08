import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Volbeat",
		'fr-fr': "Muciole",
		'es-es': "Volbeat",
		'it-it': "Volbeat",
		'pt-br': "Volbeat",
		'de-de': "Volbeat"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		313,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Acrobatics",
				'fr-fr': "Acrobatie",
				'es-es': "Acróbata",
				'it-it': "Acrobazia",
				'pt-br': "Acrobático",
				'de-de': "Akrobatik"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 20 de danos adicionais para cada cara.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pester",
				'fr-fr': "Tarabustage",
				'es-es': "Insistencia",
				'it-it': "Perseguitare",
				'pt-br': "Importunar",
				'de-de': "Drangsal"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 30 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 30 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 30 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver sendo afetado por uma Condição Especial, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives around clean ponds. At night, its rear lights up. It converses with others by flashing its light.",
	},

	thirdParty: {
		cardmarket: 273548,
		tcgplayer: 95901
	}
}

export default card

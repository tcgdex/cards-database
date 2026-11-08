import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Corsola",
		'fr-fr': "Corayon",
		'es-es': "Corsola",
		'it-it': "Corsola",
		'pt-br': "Corsola",
		'de-de': "Corasonn"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		222,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Refresh",
				'fr-fr': "Régénération",
				'es-es': "Alivio",
				'it-it': "Rinfrescata",
				'pt-br': "Refrescar",
				'de-de': "Heilung"
			},
			effect: {
				'en-us': "Heal 30 damage and remove all Special Conditions from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts et retirez tous les États Spéciaux de ce Pokémon.",
				'es-es': "Cura 30 puntos de daño y elimina todas las Condiciones Especiales de este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni e rimuovi tutte le condizioni speciali che lo influenzano.",
				'pt-br': "Cure 30 de danos e remova todas as Condições Especiais deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon. Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Spiny Rush",
				'fr-fr': "Assaut Épineux",
				'es-es': "Envite Espinoso",
				'it-it': "Aculeoraffica",
				'pt-br': "Arremetida Espinhosa",
				'de-de': "Stachelsturm"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño más por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda até sair coroa. Esse ataque causa 20 de danos adicionais para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	description: {
		'en-us': "It continuously sheds and grows. The tip of its head is prized as a treasure because of its beauty.",
	},

	thirdParty: {
		cardmarket: 281373,
		tcgplayer: 84444
	}
}

export default card

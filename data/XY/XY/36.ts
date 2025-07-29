import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Corsola",
		fr: "Corayon",
		es: "Corsola",
		it: "Corsola",
		pt: "Corsola",
		de: "Corasonn"
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
				en: "Refresh",
				fr: "Régénération",
				es: "Alivio",
				it: "Rinfrescata",
				pt: "Refrescar",
				de: "Heilung"
			},
			effect: {
				en: "Heal 30 damage and remove all Special Conditions from this Pokémon.",
				fr: "Soignez 30 dégâts et retirez tous les États Spéciaux de ce Pokémon.",
				es: "Cura 30 puntos de daño y elimina todas las Condiciones Especiales de este Pokémon.",
				it: "Cura questo Pokémon da 30 danni e rimuovi tutte le condizioni speciali che lo influenzano.",
				pt: "Cure 30 de danos e remova todas as Condições Especiais deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon. Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Spiny Rush",
				fr: "Assaut Épineux",
				es: "Envite Espinoso",
				it: "Aculeoraffica",
				pt: "Arremetida Espinhosa",
				de: "Stachelsturm"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño más por cada cara.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue uma moeda até sair coroa. Esse ataque causa 20 de danos adicionais para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	thirdParty: {
		cardmarket: 281373
	}
}

export default card

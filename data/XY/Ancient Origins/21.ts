import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		es: "Gyarados",
		it: "Gyarados",
		pt: "Gyarados",
		de: "Garados"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Full Retaliation",
				fr: "Vengeance Totale",
				es: "Venganza Total",
				it: "Super Rappresaglia",
				pt: "Retaliação Completa",
				de: "Vollständige Vergeltung"
			},
			effect: {
				en: "This attack does 30 more damage for each damage counter on each of your Benched Magikarp.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur chacun de vos Magicarpe de Banc.",
				es: "Este ataque hace 30 puntos de daño más por cada contador de daño en cada uno de tus Magikarp en Banca.",
				it: "Questo attacco infligge 30 danni in più per ogni segnalino danno presente su ciascuno dei tuoi Magikarp in panchina.",
				pt: "Este ataque causa 30 de danos adicionais para cada marcador de danos em cada um dos seus Magikarp no Banco.",
				de: "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Schadensmarke auf jedem Karpador auf deiner Bank zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thrash",
				fr: "Mania",
				es: "Golpe",
				it: "Colpo",
				pt: "Castigar",
				de: "Fuchtler"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage. If tails, this Pokémon does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más. Si sale cruz, este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più. Se esce croce, questo Pokémon infligge 30 danni a se stesso.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais. Se sair coroa, o Pokémon causará 30 de danos a ele mesmo.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu. Bei \"Zahl\" fügt sich dieses Pokémon selbst 30 Schadenspunkte zu."
			},
			damage: "100+",

		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	abilities: [{
		type: "Ability",

		name: {
			en: "{title}:",
			fr: "{title}:",
			es: "{title}:",
			it: "{title}:",
			pt: "{title}:",
			de: "{title}:"
		},

		effect: {
			en: "{title}: This Pokémon may have up to 2 Pokémon Tool cards attached to it.",
			fr: "{title}: Jusqu'à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon.",
			es: "{title}: Este Pokémon puede tener hasta 2 cartas de Herramienta Pokémon unidas a él.",
			it: "{title}: Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate.",
			pt: "{title}: Este Pokémon pode ter até dois cards de Ferramenta Pokémon ligados a ele.",
			de: "{title}: An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein."
		}
	}],

	thirdParty: {
		cardmarket: 284201
	}
}

export default card

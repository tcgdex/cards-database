import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Mewtwo EX",
		'fr-fr': "Mewtwo EX",
		'es-es': "Mewtwo EX",
		'it-it': "Mewtwo EX",
		'pt-br': "Mewtwo EX",
		'de-de': "Mewtu EX"
	},

	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Shatter Shot",
				'fr-fr': "Coup Fracassant",
				'es-es': "Proyectil Estallido",
				'it-it': "Frantumacolpo",
				'pt-br': "Tiro de Estilhaçar",
				'de-de': "Splitterschuss"
			},
			effect: {
				'en-us': "This attack does 30 damage times the amount of Psychic Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Psychic attachées à ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño por cada Energía Psychic unida a este Pokémon.",
				'it-it': "Questo attacco infligge 30 danni per ogni Energia Psychic assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 30 de danos vezes a quantidade de Energia Psychic ligada a este Pokémon.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Psychic-Energien zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Damage Change",
				'fr-fr': "Change Dégâts",
				'es-es': "Cambio de Daño",
				'it-it': "Barattadanni",
				'pt-br': "Troca de Danos",
				'de-de': "Schadenswechsel"
			},
			effect: {
				'en-us': "Switch all damage counters on this Pokémon with those on your opponent's Active Pokémon.",
				'fr-fr': "Échangez tous les marqueurs de dégâts de ce Pokémon avec ceux du Pokémon Actif de votre adversaire.",
				'es-es': "Cambia todos los contadores de daño de este Pokémon por los del Pokémon Activo de tu rival.",
				'it-it': "Scambia tutti i segnalini danno su questo Pokémon con quelli sul Pokémon attivo del tuo avversario.",
				'pt-br': "Troque todos os contadores de dano deste Pokémon com os do Pokémon Ativo do seu oponente.",
				'de-de': "Tausche alle Schadensmarken auf diesem Pokémon mit denen auf dem Aktiven Pokémon deines Gegners aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 286307,
		tcgplayer: 107181
	}
}

export default card

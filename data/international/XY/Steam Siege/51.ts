import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Hoopa",
		'fr-fr': "Hoopa",
		'es-es': "Hoopa",
		'it-it': "Hoopa",
		'pt-br': "Hoopa",
		'de-de': "Hoopa"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		720,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hyperspace Punch",
				'fr-fr': "Poing Hyperespace",
				'es-es': "Puño Dimensional",
				'it-it': "Pugnodimensionale",
				'pt-br': "Soco de Hiperespaço",
				'de-de': "Dimensionshieb"
			},
			effect: {
				'en-us': "This attack does 20 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a due dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 de danos a 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 2 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Portal Strike",
				'fr-fr': "Frappe Dimensionnelle",
				'es-es': "Portal Impacto",
				'it-it': "Colpoportale",
				'pt-br': "Ataque ao Portal",
				'de-de': "Portalhieb"
			},
			effect: {
				'en-us': "This Pokémon can't use Portal Strike during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Frappe Dimensionnelle pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Portal Impacto durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpoportale.",
				'pt-br': "Este Pokémon não poderá usar Ataque ao Portal durante sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Portalhieb während deines nächsten Zuges nicht einsetzen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said to be able to seize anything it desires with its six rings and six huge arms. With its power sealed, it is transformed into a much smaller form.",
	},

	thirdParty: {
		cardmarket: 291542,
		tcgplayer: 121140
	}
}

export default card

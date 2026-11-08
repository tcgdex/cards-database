import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Tapu Lele",
		'fr-fr': "Tokopiyon",
		'es-es': "Tapu Lele",
		'it-it': "Tapu Lele",
		'pt-br': "Tapu Lele",
		'de-de': "Kapu-Fala"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		786,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Psywave",
				'fr-fr': "Vague Psy",
				'es-es': "Psicoonda",
				'it-it': "Psiconda",
				'pt-br': "Onda Psíquica",
				'de-de': "Psywelle"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Magical Swap",
				'fr-fr': "Permutation Magique",
				'es-es': "Cambio Mágico",
				'it-it': "Magibaratto",
				'pt-br': "Troca Encantada",
				'de-de': "Magischer Austausch"
			},
			effect: {
				'en-us': "Move any number of damage counters on your opponent’s Pokémon to their other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de votre adversaire vers ses autres Pokémon, de la manière que vous voulez.",
				'es-es': "Mueve cualquier cantidad de contadores de daño de los Pokémon de tu rival a sus otros Pokémon de la manera que desees.",
				'it-it': "Distribuisci a piacimento i segnalini danno presenti sui Pokémon del tuo avversario.",
				'pt-br': "Mova qualquer número de contadores de dano dos Pokémon do seu oponente para os outros Pokémon dele(a) como desejar.",
				'de-de': "Verschiebe beliebig viele Schadensmarken auf den Pokémon deines Gegners beliebig auf seine anderen Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This guardian deity of Akala is guilelessly cruel. The fragrant aroma of flowers is the source of its energy.",
	},

	thirdParty: {
		cardmarket: 316020,
		tcgplayer: 157711
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "M Alakazam EX",
		'fr-fr': "M-Alakazam EX",
		'es-es': "M-Alakazam EX",
		'it-it': "M Alakazam EX",
		'pt-br': "M-Alakazam EX",
		'de-de': "M-Simsala EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		65,
	],

	hp: 210,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Alakazam-EX",
		'fr-fr': "Alakazam-EX",
		'es-es': "Alakazam-EX",
		'it-it': "Alakazam-EX",
		'pt-br': "Alakazam-EX",
		'de-de': "Simsala-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Zen Force",
				'fr-fr': "Force Zen",
				'es-es': "Fuerza Zen",
				'it-it': "Forza Zen",
				'pt-br': "Força Zen",
				'de-de': "Zen-Kraft"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each damage counter on your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 de danos adicionais para cada contador de danos no Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 117515
	}
}

export default card

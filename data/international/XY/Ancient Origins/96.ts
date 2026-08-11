import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Primal Kyogre EX",
		'fr-fr': "PrimoKyogre EX",
		'es-es': "Kyogre Primigenio EX",
		'it-it': "Archeo Kyogre EX",
		'pt-br': "Kyogre PrimitivoEX",
		'de-de': "ProtoKyogre EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 240,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Kyogre-EX",
		'fr-fr': "Kyogre-EX",
		'es-es': "Kyogre-EX",
		'it-it': "Kyogre-EX",
		'pt-br': "Kyogre-EX",
		'de-de': "Kyogre-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Tidal Storm",
				'fr-fr': "Tempête Océanique",
				'es-es': "Mareas de Tormenta",
				'it-it': "Tempesta Marina",
				'pt-br': "Tempestade Tidal",
				'de-de': "Gezeitensturm"
			},
			effect: {
				'en-us': "Move 2 Energy from this Pokémon to 1 of your Benched Pokémon. This attack does 30 damage to each of your opponent's Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Déplacez 2 Énergies de ce Pokémon vers l'un de vos Pokémon de Banc. Cette attaque inflige 30 dégâts à chacun des Pokémon-EX de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Mueve 2 Energías de este Pokémon a 1 de tus Pokémon en Banca. Este ataque hace 30 puntos de daño a cada uno de los Pokémon-EX en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Sposta due Energie da questo Pokémon a uno di quelli nella tua panchina. Questo attacco infligge 30 danni a ciascun Pokémon-EX nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Mova 2 Energias deste Pokémon para 1 dos seus Pokémon no Banco. Este ataque causa 30 de danos a cada Pokémon-EX de seu oponente no Banco. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Verschiebe 2 an dieses Pokémon angelegte Energien auf 1 Pokémon auf deiner Bank. Dieser Angriff fügt jedem Pokémon-EX auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 150,

		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "{title}:",
			'fr-fr': "{title}:",
			'es-es': "{title}:",
			'it-it': "{title}:",
			'pt-br': "{title}:",
			'de-de': "{title}:"
		},

		effect: {
			'en-us': "{title}: When 1 of your Pokémon becomes this Pokémon, heal all damage from it.",
			'fr-fr': "{title}: Lorsqu'un de vos Pokémon devient ce Pokémon, soignez tous les dégâts de ce Pokémon.",
			'es-es': "{title}: Cuando 1 de tus Pokémon se convierte en este Pokémon, cura todos sus puntos de daño.",
			'it-it': "{title}: Quando uno dei tuoi Pokémon diventa questo Pokémon, curane tutti i danni.",
			'pt-br': "{title}: Quando 1 dos seus Pokémon se tornar este Pokémon, cure todos os danos dele.",
			'de-de': "{title}: Wenn 1 deiner Pokémon zu diesem Pokémon wird, heile allen Schaden bei diesem Pokémon."
		}
	}],

	thirdParty: {
		cardmarket: 284277,
		tcgplayer: 101518
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Primal Kyogre EX",
		fr: "PrimoKyogre EX",
		es: "Kyogre Primigenio EX",
		it: "Archeo Kyogre EX",
		pt: "Kyogre PrimitivoEX",
		de: "ProtoKyogre EX"
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
		en: "Kyogre-EX",
		fr: "Kyogre-EX",
		es: "Kyogre-EX",
		it: "Kyogre-EX",
		pt: "Kyogre-EX",
		de: "Kyogre-EX"
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
				en: "Tidal Storm",
				fr: "Tempête Océanique",
				es: "Mareas de Tormenta",
				it: "Tempesta Marina",
				pt: "Tempestade Tidal",
				de: "Gezeitensturm"
			},
			effect: {
				en: "Move 2 Energy from this Pokémon to 1 of your Benched Pokémon. This attack does 30 damage to each of your opponent's Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Déplacez 2 Énergies de ce Pokémon vers l'un de vos Pokémon de Banc. Cette attaque inflige 30 dégâts à chacun des Pokémon-EX de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Mueve 2 Energías de este Pokémon a 1 de tus Pokémon en Banca. Este ataque hace 30 puntos de daño a cada uno de los Pokémon-EX en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Sposta due Energie da questo Pokémon a uno di quelli nella tua panchina. Questo attacco infligge 30 danni a ciascun Pokémon-EX nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Mova 2 Energias deste Pokémon para 1 dos seus Pokémon no Banco. Este ataque causa 30 de danos a cada Pokémon-EX de seu oponente no Banco. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Verschiebe 2 an dieses Pokémon angelegte Energien auf 1 Pokémon auf deiner Bank. Dieser Angriff fügt jedem Pokémon-EX auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
			en: "{title}:",
			fr: "{title}:",
			es: "{title}:",
			it: "{title}:",
			pt: "{title}:",
			de: "{title}:"
		},

		effect: {
			en: "{title}: When 1 of your Pokémon becomes this Pokémon, heal all damage from it.",
			fr: "{title}: Lorsqu'un de vos Pokémon devient ce Pokémon, soignez tous les dégâts de ce Pokémon.",
			es: "{title}: Cuando 1 de tus Pokémon se convierte en este Pokémon, cura todos sus puntos de daño.",
			it: "{title}: Quando uno dei tuoi Pokémon diventa questo Pokémon, curane tutti i danni.",
			pt: "{title}: Quando 1 dos seus Pokémon se tornar este Pokémon, cure todos os danos dele.",
			de: "{title}: Wenn 1 deiner Pokémon zu diesem Pokémon wird, heile allen Schaden bei diesem Pokémon."
		}
	}]
}

export default card

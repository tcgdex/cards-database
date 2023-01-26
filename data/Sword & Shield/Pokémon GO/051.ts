import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Delicious Egg",
			fr: "Œuf Délicieux",
			es: "Huevo Exquisito",
			it: "Uovo Delizioso",
			pt: "Ovo Delicioso",
			de: "Köstliches Ei"
		},

		effect: {
			en: "Heal 30 damage from 1 of your Benched Pokémon.",
			fr: "Soignez 30 dégâts de l'un de vos Pokémon de Banc.",
			es: "Cura 30 puntos de daño a 1 de tus Pokémon en Banca.",
			it: "Cura uno dei tuoi Pokémon in panchina da 30 danni.",
			pt: "Cure 30 pontos de dano de 1 dos seus Pokémon no Banco.",
			de: "Heile 30 Schadenspunkte bei 1 Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card
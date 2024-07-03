import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Arboliva",
		en: "Arboliva",
		es: "Arboliva",
		it: "Arboliva",
		pt: "Arboliva",
		de: "Olithena"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Fruit Soigneur",
			en: "Healing Fruit",
			es: "Fruta Sanadora",
			it: "Frutto Toccasana",
			pt: "Fruta de Cura",
			de: "Heilendes Obst"
		},

		effect: {
			fr: "Soignez tous les dégâts de l'un de vos Pokémon de Banc.",
			en: "Heal all damage from 1 of your Benched Pokémon.",
			es: "Cura todos los puntos de daño a uno de tus Pokémon en Banca.",
			it: "Cura uno dei tuoi Pokémon in panchina da tutti i danni.",
			pt: "Cure todo o dano de 1 dos seus Pokémon no Banco.",
			de: "Heile allen Schaden bei 1 Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Grass"],

		name: {
			fr: "Tir d'Huile",
			en: "Oil Shot",
			es: "Disparo de Aceite",
			it: "Colpolio",
			pt: "Disparo de Azeite",
			de: "Ölschuss"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Scream Tail",
		fr: "Hurle-Queue",
		es: "Colagrito",
		it: "Codaurlante",
		pt: "Cauda Brado",
		de: "Brüllschweif"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Supportive Singing",
			fr: "Chant Encourageant",
			es: "Canto de Auxilio",
			it: "Canto Solidale",
			pt: "Canto Encorajador",
			de: "Unterstützender Gesang"
		},

		effect: {
			en: "Heal 100 damage from 1 of your Benched Ancient Pokémon.",
			fr: "Soignez 100 dégâts de l'un de vos Pokémon Temps passé de Banc.",
			es: "Cura 100 puntos de daño a uno de tus Pokémon del pasado en Banca.",
			it: "Cura uno dei tuoi Pokémon Tempo Passato in panchina da 100 danni.",
			pt: "Cure 100 pontos de dano de 1 dos seus Pokémon Ancestrais no Banco.",
			de: "Heile 100 Schadenspunkte bei 1 Pokémon aus der Vergangenheit auf deiner Bank."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hyper Voice",
			fr: "Mégaphone",
			es: "Vozarrón",
			it: "Granvoce",
			pt: "Hipervoz",
			de: "Schallwelle"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
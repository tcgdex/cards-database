import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [242],
	set: Set,

	name: {
		en: "Blissey",
		fr: "Leuphorie",
		es: "Blissey",
		it: "Blissey",
		pt: "Blissey",
		de: "Heiteira"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Enriching Egg",
			fr: "Œuf Fortifiant",
			es: "Huevo Nutritivo",
			it: "Uovo Nutriente",
			pt: "Ovo Terapêutico",
			de: "Anreicherndes Ei"
		},

		effect: {
			en: "Heal all damage from 1 of your Benched Pokémon.",
			fr: "Soignez tous les dégâts de l'un de vos Pokémon de Banc.",
			es: "Cura todos los puntos de daño a 1 de tus Pokémon en Banca.",
			it: "Cura uno dei tuoi Pokémon in panchina da tutti i danni.",
			pt: "Cure todo o dano de 1 dos seus Pokémon no Banco.",
			de: "Heile allen Schaden bei 1 Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Zen Headbutt",
			fr: "Psykoud'Boul",
			es: "Cabezazo Zen",
			it: "Cozzata Zen",
			pt: "Cabeçada Zen",
			de: "Zen-Kopfstoß"
		},

		damage: 100
	}],

	retreat: 4,
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card

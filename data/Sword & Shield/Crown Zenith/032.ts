import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [321],
	set: Set,

	name: {
		en: "Wailord",
		fr: "Wailord",
		es: "Wailord",
		it: "Wailord",
		pt: "Wailord",
		de: "Wailord"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
		es: "Wailmer",
		it: "Wailmer",
		pt: "Wailmer",
		de: "Wailmer"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
			es: "Drenaje Burbujas",
			it: "Assorbibolla",
			pt: "Dreno de Bolha",
			de: "Blasengully"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 80
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
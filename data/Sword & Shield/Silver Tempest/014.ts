import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [640],
	set: Set,

	name: {
		en: "Virizion",
		fr: "Viridium",
		es: "Virizion",
		it: "Virizion",
		pt: "Virizion",
		de: "Viridium"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Four as One",
			fr: "Quatre pour Un",
			es: "Cuatro para Uno",
			it: "Tetrasintonia",
			pt: "Quatro em Um",
			de: "Viererpakt"
		},

		effect: {
			en: "If Cobalion, Terrakion, and Keldeo are on your Bench, this attack does 70 more damage.",
			fr: "Si Cobaltium, Terrakium et Keldeo sont sur votre Banc, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si Cobalion, Terrakion y Keldeo están en tu Banca, este ataque hace 70 puntos de daño más.",
			it: "Se Cobalion, Terrakion e Keldeo sono nella tua panchina, questo attacco infligge 70 danni in più.",
			pt: "Se Cobalion, Terrakion e Keldeo estiverem no seu Banco, este ataque causará 70 pontos de dano a mais.",
			de: "Wenn sich Kobalium, Terrakium und Keldeo auf deiner Bank befinden, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Leaf Drain",
			fr: "Feuille Sangsue",
			es: "Hoja Drenante",
			it: "Assorbifoglia",
			pt: "Dreno Folha",
			de: "Blattsauger"
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682055,
		tcgplayer: 451642
	}
}

export default card
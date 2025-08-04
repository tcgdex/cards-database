import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Electrode V",
		fr: "Électrode de Hisui V",
		es: "Electrode de Hisui V",
		it: "Electrode di Hisui V",
		pt: "Electrode de Hisui V",
		de: "Hisui-Lektrobal V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			en: "Tantrum Blast",
			fr: "Explosion Capricieuse",
			es: "Rabieta Explosiva",
			it: "Collerabomba",
			pt: "Explosão Birrenta",
			de: "Vor Wut platzen"
		},

		effect: {
			en: "This attack does 100 damage for each Special Condition affecting this Pokémon.",
			fr: "Cette attaque inflige 100 dégâts pour chaque État Spécial affectant ce Pokémon.",
			es: "Este ataque hace 100 puntos de daño por cada Condición Especial que afecte a este Pokémon.",
			it: "Questo attacco infligge 100 danni per ogni condizione speciale che influenza questo Pokémon.",
			pt: "Este ataque causa 100 pontos de dano para cada Condição Especial afetando este Pokémon.",
			de: "Diese Attacke fügt für jeden Speziellen Zustand, von dem dieses Pokémon betroffen ist, 100 Schadenspunkte zu."
		},

		damage: "100×"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Solar Shot",
			fr: "Tir Solaire",
			es: "Disparo Solar",
			it: "Colpo Solare",
			pt: "Disparo Solar",
			de: "Solarschuss"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l'Énergie de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 670823,
		tcgplayer: 284110
	}
}

export default card
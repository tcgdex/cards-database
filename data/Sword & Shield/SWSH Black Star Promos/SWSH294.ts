import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Électrode de Hisui V",
		de: "Hisui-Lektrobal V",
		es: "Electrode de Hisui V",
		pt: "Electrode de Hisui V",
		it: "Electrode di Hisui V",
		en: "Hisuian Electrode V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			fr: "Explosion Capricieuse",
			de: "Vor Wut platzen",
			es: "Rabieta Explosiva",
			pt: "Explosão Birrenta",
			it: "Collerabomba",
			en: "Tantrum Blast"
		},

		effect: {
			fr: "Cette attaque inflige 100 dégâts pour chaque État Spécial affectant ce Pokémon.",
			de: "Diese Attacke fügt für jeden Speziellen Zustand, von dem dieses Pokémon betroffen ist, 100 Schadenspunkte zu.",
			es: "Este ataque hace 100 puntos de daño por cada Condición Especial que afecte a este Pokémon.",
			pt: "Este ataque causa 100 pontos de dano para cada Condição Especial afetando este Pokémon.",
			it: "Questo attacco infligge 100 danni per ogni condizione speciale che influenza questo Pokémon.",
			en: "This attack does 100 damage for each Special Condition affecting this Pokémon."
		},

		damage: "100×"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Tir Solaire",
			de: "Solarschuss",
			es: "Disparo Solar",
			pt: "Disparo Solar",
			it: "Colpo Solare",
			en: "Solar Shot"
		},

		effect: {
			fr: "Défaussez toute l'Énergie de ce Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta todas las Energías de este Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			en: "Discard all Energy from this Pokémon."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Aegislash ex",
		fr: "Exagide-ex",
		es: "Aegislash ex",
		it: "Aegislash-ex",
		pt: "Aegislash ex",
		de: "Durengard-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],
	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Peerless Edge",
			fr: "Lame Incomparable",
			es: "Filo sin Igual",
			it: "Lama Ineguagliabile",
			pt: "Gume Inigualável",
			de: "Unvergleichliche Klinge"
		},

		effect: {
			en: "This attack does 70 damage for each Prize card you have taken.",
			fr: "Cette attaque inflige 70 dégâts pour chaque carte Récompense que vous avez récupérée.",
			es: "Este ataque hace 70 puntos de daño por cada carta de Premio que hayas cogido.",
			it: "Questo attacco infligge 70 danni per ogni carta Premio che hai preso.",
			pt: "Este ataque causa 70 pontos de dano para cada carta de Prêmio que você pegou.",
			de: "Diese Attacke fügt für jede von dir genommene Preiskarte 70 Schadenspunkte zu."
		},

		damage: "70×"
	}, {
		cost: ["Metal", "Metal"],

		name: {
			en: "Double-Edged Slash",
			fr: "Double Tranchant",
			es: "Cuchillada Doble Filo",
			it: "Doppio Taglio",
			pt: "Talho de Dois Gumes",
			de: "Zweischneidiger Schlitzer"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "toriyufu",

	thirdParty: {
		cardmarket: 740673
	}
}

export default card
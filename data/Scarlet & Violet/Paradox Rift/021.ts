import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [514],
	set: Set,

	name: {
		en: "Simisear",
		fr: "Flamoutan",
		es: "Simisear",
		it: "Simisear",
		pt: "Simisear",
		de: "Grillchita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Monkey Trio",
			fr: "Trio Simiesque",
			es: "Trío de Monos",
			it: "Trio delle Scimmie",
			pt: "Trio Primata",
			de: "Affentrio"
		},

		effect: {
			en: "If you have Simisage, Simisear, and Simipour in play, ignore all {C} Energy in the costs of attacks used by this Pokémon.",
			fr: "Si vous avez Feuiloutan, Flamoutan et Flotoutan en jeu, ignorez toutes les Énergies {C} dans le coût des attaques utilisées par ce Pokémon.",
			es: "Si tienes a Simisage, Simisear y Simipour en juego, ignora todas las Energías {C} en los costes de los ataques usados por este Pokémon.",
			it: "Se hai in gioco Simisage, Simisear e Simipour, ignora tutte le Energie {C} necessarie per gli attacchi usati da questo Pokémon.",
			pt: "Se você tiver Simisage, Simisear e Simipour em jogo, ignore todas as Energias {C} nos custos dos ataques usados por este Pokémon.",
			de: "Wenn du Vegichita, Grillchita und Sodachita im Spiel hast, ignoriere alle {C}-Energien in den Kosten der von diesem Pokémon eingesetzten Attacken."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique",
			es: "Placaje Ardiente",
			it: "Calorazione",
			pt: "Golpe de Colisão Aquecido",
			de: "Hitze-Tackle"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 190
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Yuya Oka"
}

export default card
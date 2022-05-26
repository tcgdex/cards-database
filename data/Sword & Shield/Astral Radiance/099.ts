import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Darkrai VSTAR",
		fr: "Darkrai VSTAR",
		es: "Darkrai V-ASTRO",
		it: "Darkrai V ASTRO",
		pt: "Darkrai V-ASTRO",
		de: "Darkrai VSTAR"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	evolveFrom: {
		en: "Darkrai V",
		fr: "Darkrai-V",
		es: "Darkrai V",
		it: "Darkrai-V",
		pt: "Darkrai V",
		de: "Darkrai-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Dark Pulse",
			fr: "Vibrobscur",
			es: "Pulso Umbrío",
			it: "Neropulsar",
			pt: "Pulso Sombrio",
			de: "Finsteraura"
		},

		effect: {
			en: "This attack does 30 more damage for each Darkness Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Darkness unida a todos tus Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Darkness assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Darkness ligada a todos os seus Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Darkness-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
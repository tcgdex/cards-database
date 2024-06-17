import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [303],
	set: Set,

	name: {
		fr: "Mysdibule",
		en: "Mawile",
		es: "Mawile",
		it: "Mawile",
		pt: "Mawile",
		de: "Flunkifer"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Mâchouille Malicieuse",
			en: "Mischievous Crunch",
			es: "Trituración Malvada",
			it: "Sgranocchio Birichino",
			pt: "Mastigada Maliciosa",
			de: "Gemeiner Knirscher"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts pour chaque Énergie Psychic attachée à ce Pokémon.",
			en: "This attack does 30 damage for each Psychic Energy attached to this Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada Energía Psychic unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni per ogni Energia Psychic assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada Energia Psychic ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Psychic-Energie 30 Schadenspunkte zu."
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card
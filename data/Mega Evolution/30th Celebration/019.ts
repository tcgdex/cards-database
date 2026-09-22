import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "In myths, this Pokémon expanded the seas with torrential rains and great tsunamis. It battled ferociously against Groudon."
	},

	name: {
		en: "Kyogre",
		fr: "Kyogre",
		de: "Kyogre",
		es: "Kyogre",
		it: "Kyogre",
		'es-mx': "Kyogre"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [382],
	hp: 140,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			de: "Hydropumpe",
			es: "Hidrobomba",
			it: "Idropompa",
			'es-mx': "Hidrobomba"
		},

		effect: {
			en: "This attack does 30 more damage for each <span class=\"energy-symbol Water\" title=\"Water\">Water</span> Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie <span class=\"energy-symbol Water\" title=\"Eau\">Water</span> attachée à ce Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte <span class=\"energy-symbol Water\" title=\"Wasser\">Water</span>-Energie 30 Schadenspunkte mehr zu.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía <span class=\"energy-symbol Water\" title=\"Agua\">Water</span> unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia <span class=\"energy-symbol Water\" title=\"Acqua\">Water</span> assegnata a questo Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada Energía <span class=\"energy-symbol Water\" title=\"Agua\">Water</span> unida a este Pokémon."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907625,
				tcgplayer: 716452
			}
		}
	],
}

export default card

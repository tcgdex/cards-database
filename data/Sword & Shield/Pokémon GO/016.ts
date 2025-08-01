import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [8],
	set: Set,

	name: {
		en: "Wartortle",
		fr: "Carabaffe",
		es: "Wartortle",
		it: "Wartortle",
		pt: "Wartortle",
		de: "Schillok"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce",
		es: "Squirtle",
		it: "Squirtle",
		pt: "Squirtle",
		de: "Schiggy"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			de: "Aquaknarre"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			es: "Hidrobomba",
			it: "Idropompa",
			pt: "Jato d'Água",
			de: "Hydropumpe"
		},

		effect: {
			en: "This attack does 10 more damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada Energía Water unida a este Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni Energia Water assegnata a questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 10 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 664552
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [324],
	set: Set,

	name: {
		en: "Torkoal",
		fr: "Chartor",
		es: "Torkoal",
		it: "Torkoal",
		pt: "Torkoal",
		de: "Qurtel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Concentrated Fire",
			fr: "Feu Concentré",
			es: "Fuego Concentrado",
			it: "Fuoco Concentrato",
			pt: "Fogo Concentrado",
			de: "Geballtes Feuer"
		},

		effect: {
			en: "Flip a coin for each {R} Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie {R} attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda por cada Energía {R} unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Energia {R} assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda para cada Energia {R} ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara.",
			de: "Wirf 1 Münze für jede an dieses Pokémon angelegte {R}-Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
    {
      type: "reverse",
      size: "standard"
    },
    {
      type: "normal",
      size: "standard"
    }
  ],

	illustrator: "Kurata So",

	description: {
		en: "It burns coal inside its shell for energy. It blows out black soot if it is endangered.",
	},

	thirdParty: {
        cardmarket: 702331,
        tcgplayer: 487875
    }
}

export default card
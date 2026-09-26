import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario",
		es: "Lucario",
	},

	illustrator: "Taiga Kasai",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",
	dexId: [448],

	evolveFrom: {
		en: "Riolu",
		es: "Riolu",
	},

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Aura Sphere",
			es: "Esfera Aural",
		},

		effect: {
			en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 60 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Psychic",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895610,
				tcgplayer: 713263
			}
		}
	],
}

export default card

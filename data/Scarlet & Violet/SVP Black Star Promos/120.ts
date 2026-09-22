import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		en: "Pupitar",
		es: "Pupitar",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	evolveFrom: {
		en: "Larvitar",
		es: "Larvitar",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Rock Throw",
			es: "Lanzarrocas",
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Blasting Tackle",
			es: "Placaje Explosivo",
		},

		effect: {
			en: "This attack also does 20 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 20 puntos de daño a uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Shiburingaru",
	description: {
		en: "This pupa flies around wildly by venting with great force the gas pressurized inside its body.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 769420,
				tcgplayer: 554189
			},
		}
	],
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Palossand",
		fr: "Trépassable"
	},

	illustrator: "Hasuno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Sandygast"
	},

	description: {
		en: "The terrifying Palossand drags smaller Pokémon\ninto its sandy body. Once its victims are trapped,\nit drains them of their vitality whenever it pleases.",
		fr: "Trépassable est terrifiant. Il attire de petits Pokémon à l'intérieur de son corps de sable afin d'aspirer leur énergie vitale à sa guise."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sand Tomb",
			fr: "Tourbi-Sable"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card
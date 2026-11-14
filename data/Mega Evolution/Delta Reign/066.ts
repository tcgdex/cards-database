import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Zorua",
		fr: "Zorua",
		de: "Zorua",
		es: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		'es-mx': "Zorua"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Stampede",
			fr: "Ruée",
			de: "Zertrampeln",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			'es-mx': "Estampida"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 728039,
				cardmarket: 918891
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 728039,
				cardmarket: 918891
			}
		}
	],
}

export default card
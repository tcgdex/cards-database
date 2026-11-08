import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
		'es-es': "Machamp",
		'it-it': "Machamp",
		'de-de': "Machomei",
		'pt-br': "Machamp",
		'ko-kr': "괴력몬"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",

	dexId: [68],
	hp: 150,
	types: ["Fighting"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Machoke"
	},

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Seismic Toss",
			'fr-fr': "Frappe Atlas",
			'es-es': "Sísmico",
			'it-it': "Movimento Sismico",
			'de-de': "Geowurf",
			'pt-br': "Arremesso Sísmico",
			'ko-kr': "지구던지기"
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		'en-us': "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.",
		'fr-fr': "Il peut bouger ses quatre bras à grande vitesse\net frapper du poing ou du tranchant de la main\ndans toutes les directions sans se fatiguer.",
		'es-es': "Mueve rápidamente sus cuatro brazos\npara asestar incesantes golpes y\npuñetazos desde todos los ángulos.",
		'it-it': "Agita velocemente le quattro braccia tempestando\ngli avversari di pugni e colpi da ogni direzione.",
		'de-de': "Es verwendet seine vier Arme, um seine\nGegner unermüdlich mit schnellen Schlägen\naus allen Winkeln einzudecken.",
		'pt-br': "Ele balança velozmente seus quatro braços para\natingir seus oponentes com socos e pancadas\nincessantes de todos os ângulos.",
		'ko-kr': "4개의 팔을 재빠르게 움직여서\n모든 각도에서 쉬지 않고\n펀치와 당수를 날린다."
	},

	boosters: ["charizard"]
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Dolliv",
		fr: "Olivado",
		de: "Olivinio",
		es: "Dolliv",
		it: "Dolliv",
		pt: "Dolliv",
		'es-mx': "Dolliv"
	},

	illustrator: "Eri Kamei",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			de: "Blattschritt",
			es: "Paso Hoja",
			it: "Passofoglia",
			pt: "Passo de Folha",
			'es-mx': "Paso de Hoja"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		tcgplayer: 727572,
		cardmarket: 918826
	}
}

export default card
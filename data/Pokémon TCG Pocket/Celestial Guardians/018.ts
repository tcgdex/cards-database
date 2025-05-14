import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Bounsweet",
		fr: "Croquine",
		es: "Bounsweet",
		it: "Bounsweet",
		de: "Frubberl",
		'pt-br': "Bounsweet",
		ko: "달콤아"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "Its sweat is sweet, like syrup made from boiled-down fruit. Because of this, Bounsweet was highly valued in the past, when sweeteners were scarce.",
		fr: "Sa sueur est aussi sucrée qu'un jus de fruits.\nElle était donc très appréciée autrefois,\nquand les édulcorants étaient rares.",
		es: "En la antigüedad, cuando no eran comunes los\nsabores dulces, era muy apreciado por su sudor,\npues es tan dulce como un concentrado de fruta.",
		it: "In tempi antichi, quando i cibi dolci erano rari,\nquesto Pokémon era molto apprezzato per via\ndel suo sudore dolce come marmellata.",
		de: "Sein Schweiß schmeckt so süß wie eingekochtes\nObst und wurde daher früher, als es nur wenige\nSüßungsmittel gab, sehr geschätzt.",
		'pt-br': "Seu suor é doce como a calda feita da fervura de frutas.\nDevido a isso, Bounsweet era altamente valorizado\nno passado, quando os adoçantes eram escassos.",
		ko: "과일을 졸인 것만 같은 달콤한 땀을\n흘리기 때문에, 달콤한 음식이 적었던\n옛날에는 매우 귀하게 여겨졌다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			it: "Fuggi Fuggi",
			de: "Zertrampeln",
			'pt-br': "Estouro",
			ko: "밟기"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
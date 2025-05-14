import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Swirlix",
		fr: "Sucroquin",
		es: "Swirlix",
		it: "Swirlix",
		de: "Flauschling",
		'pt-br': "Swirlix",
		ko: "나룸퍼프"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It eats its own weight in sugar every day. If it doesn't get enough sugar, it becomes incredibly grumpy.",
		fr: "Il mange son propre poids en sucre chaque\njour. S'il n'a pas sa dose de sucreries,\nil devient horriblement grognon.",
		es: "Ingiere diariamente una cantidad de azúcar\nequivalente a su peso corporal. De lo contrario,\nse pone de muy mal humor.",
		it: "Mangia ogni giorno una quantità di zucchero\npari al peso del suo corpo. Quando il suo livello\ndi glucosio cala troppo, diventa di cattivo umore.",
		de: "Die Menge an Zucker, die es pro Tag verschlingt,\nentspricht seinem Körpergewicht. Bekommt es\nnicht genügend Zucker, wird es unausstehlich.",
		'pt-br': "Come o equivalente ao seu próprio peso em açúcar todos os dias.\nSe não consumir açúcar suficiente, ficará absurdamente mal-humorado.",
		ko: "하루에 자신의 체중만큼의\n설탕을 먹는다. 당분이\n부족하면 매우 기분이 나빠진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
			es: "Viento Feérico",
			it: "Vento di Fata",
			de: "Feenbrise",
			'pt-br': "Vento de Fada",
			ko: "요정의바람"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card

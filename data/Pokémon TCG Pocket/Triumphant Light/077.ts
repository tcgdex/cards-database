import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		it: "Marill",
		de: "Marill",
		'pt-br': "Marill",
		ko: "마릴"
	},

	illustrator: "Taiga Kayama",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "The fur on its body naturally repels water. It can stay dry even when it plays in the water.",
		fr: "Sa fourrure est imperméable, si bien qu'il\nreste sec même quand il joue dans l'eau.",
		es: "Tiene un pelaje que repele el agua, por lo\nque está seco incluso después de bañarse.",
		it: "La pelliccia è idrorepellente. Così, rimane\nasciutto anche giocando nell'acqua.",
		de: "Sein Fell ist von Natur aus wasserabweisend.\nEs bleibt trocken, auch wenn es im Wasser spielt.",
		'pt-br': "A sua pelagem repele água naturalmente.\nPode brincar na água por horas sem se molhar.",
		ko: "전신의 털은\n물을 튕겨 내는 성질을 지녀\n물을 끼얹어도 말라 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			de: "Aquaknarre",
			'pt-br': "Revólver d'Água",
			ko: "물대포"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card

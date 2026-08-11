import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Marill",
		'fr-fr': "Marill",
		'es-es': "Marill",
		'it-it': "Marill",
		'de-de': "Marill",
		'pt-br': "Marill",
		'ko-kr': "마릴"
	},

	illustrator: "Tika Matsuno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [183],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "The fur on its body naturally repels water. It can stay dry even when it plays in the water.",
		'fr-fr': "Sa fourrure est imperméable, si bien qu'il\nreste sec même quand il joue dans l'eau.",
		'es-es': "Tiene un pelaje que repele el agua, por lo\nque está seco incluso después de bañarse.",
		'it-it': "La pelliccia è idrorepellente. Così, rimane\nasciutto anche giocando nell'acqua.",
		'de-de': "Sein Fell ist von Natur aus wasserabweisend.\nEs bleibt trocken, auch wenn es im Wasser spielt.",
		'pt-br': "A sua pelagem repele água naturalmente.\nPode brincar na água por horas sem se molhar.",
		'ko-kr': "전신의 털은\n물을 튕겨 내는 성질을 지녀\n물을 끼얹어도 말라 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'de-de': "Aquaknarre",
			'pt-br': "Revólver d'Água",
			'ko-kr': "물대포"
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

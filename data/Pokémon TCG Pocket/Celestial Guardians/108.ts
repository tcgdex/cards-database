import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Meowth",
		fr: "Miaoussd'Alola",
		es: "Meowthde Alola",
		it: "Meowthdi Alola",
		de: "Alola-Mauzi",
		'pt-br': "Meowthde Alola",
		ko: "알로라나옹"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [52],
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "It's accustomed to luxury because it used to live with Alolan royalty. As a result, it's very picky about food.",
		fr: "Par le passé, il menait une vie de luxe auprès\nde la famille royale d'Alola, et il en a gardé\ndes goûts alimentaires très sélectifs.",
		es: "Antaño disfrutó de los lujos de la familia real de Alola, por lo\nque tiene un paladar muy refinado y no come cualquier cosa.",
		it: "In passato viveva nel lusso assieme alla famiglia reale della\nregione di Alola. Per questo è molto schizzinoso riguardo al cibo.",
		de: "Vor langer Zeit führte es bei einer Dynastie der\nAlola-Region ein luxuriöses Leben, wodurch es\nin Bezug auf sein Futter sehr wählerisch wurde.",
		'pt-br': "Tem um estilo de vida luxuoso porque vivia com a realeza\nde Alola. Por isso, é muito exigente com comida.",
		ko: "과거 알로라지방의 왕족과\n사치스러운 생활을 했기 때문에\n먹이의 취향이 상당히 까다롭다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			de: "Kratzer",
			'pt-br': "Arranhão",
			ko: "할퀴기"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card
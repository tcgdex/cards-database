import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		it: "Wigglytuff",
		de: "Knuddeluff",
		'pt-br': "Wigglytuff",
		ko: "푸크린"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",

	dexId: [40],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	evolveFrom: {
		en: "Jigglypuff"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hyper Voice",
			fr: "Mégaphone",
			es: "Vozarrón",
			it: "Granvoce",
			de: "Schallwelle",
			'pt-br': "Hipervoz",
			ko: "하이퍼보이스"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.",
		fr: "Il a une très belle fourrure. Mieux vaut éviter de le mettre\nen colère, ou il gonflera avant d'attaquer de tout son corps.",
		es: "Tiene un pelaje muy fino. Se recomienda no enfadarlo,\no se inflará y golpeará con todo su cuerpo.",
		it: "Ha un pelo molto fino. Attenzione a non farlo adirare,\nperché può gonfiarsi e caricare con tutto il suo peso.",
		de: "Es hat sehr feines Fell. Doch Vorsicht: Verärgert\nman Knuddeluff, bläst es sich stark auf und stürzt\nsich mit seinem ganzen Körper auf einen.",
		'pt-br': "Ele tem a pele muito fina. Tome cuidado para\nnão zangá-lo ou ele pode inflar permanentemente\ne golpear com uma pancada de corpo.",
		ko: "얇고 고운 털을 지니고 있다.\n화나게 하면 몸을 점점 부풀리며\n덮쳐 오기 때문에 주의가 필요하다."
	},

	boosters: ["pikachu"]
}

export default card

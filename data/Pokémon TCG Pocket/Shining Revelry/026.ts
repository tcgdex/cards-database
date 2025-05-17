import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmi",
		fr: "Pohm",
		es: "Pawmi",
		it: "Pawmi",
		de: "Pamo",
		'pt-br': "Pawmi",
		ko: "빠모"
	},

	illustrator: "Saboteri",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",
		fr: "Les poches sur ses joues sont peu développées.\nElles ne produisent de l'électricité que\nlorsqu'il les frotte avec ses coussinets.",
		es: "Como las bolsas de sus mejillas están poco desarrolladas, genera\nelectricidad frotándolas con las almohadillas de sus patas delanteras.",
		it: "Le sacche elettriche sulle sue guance non si sono\nsviluppate del tutto e per generare energia deve\nsfregarle vigorosamente con le zampe anteriori.",
		de: "Seine elektrischen Backentaschen sind nicht ganz\nausgebildet. Um Strom zu erzeugen, muss es mit\nden Ballen der Vorderpfoten kräftig daran reiben.",
		'pt-br': "Possui bolsas de eletricidade subdesenvolvidas em suas\nbochechas. Elas só produzem eletricidade se Pawmi esfregá-las\nfuriosamente com as almofadas de suas patas dianteiras.",
		ko: "볼의 전기 주머니가 아직 발달하지 않았다.\n앞발의 볼록살을 열심히 비벼야\n겨우 전기가 만들어진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Punch",
			fr: "Koud'Poing",
			es: "Puño",
			it: "Pugno",
			de: "Boxhieb",
			'pt-br': "Soco",
			ko: "펀치"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
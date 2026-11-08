import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pawmi",
		'fr-fr': "Pohm",
		'es-es': "Pawmi",
		'it-it': "Pawmi",
		'de-de': "Pamo",
		'pt-br': "Pawmi",
		'ko-kr': "빠모"
	},

	illustrator: "Saboteri",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [921],
	hp: 60,
	types: ["Lightning"],

	description: {
		'en-us': "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",
		'fr-fr': "Les poches sur ses joues sont peu développées.\nElles ne produisent de l'électricité que\nlorsqu'il les frotte avec ses coussinets.",
		'es-es': "Como las bolsas de sus mejillas están poco desarrolladas, genera\nelectricidad frotándolas con las almohadillas de sus patas delanteras.",
		'it-it': "Le sacche elettriche sulle sue guance non si sono\nsviluppate del tutto e per generare energia deve\nsfregarle vigorosamente con le zampe anteriori.",
		'de-de': "Seine elektrischen Backentaschen sind nicht ganz\nausgebildet. Um Strom zu erzeugen, muss es mit\nden Ballen der Vorderpfoten kräftig daran reiben.",
		'pt-br': "Possui bolsas de eletricidade subdesenvolvidas em suas\nbochechas. Elas só produzem eletricidade se Pawmi esfregá-las\nfuriosamente com as almofadas de suas patas dianteiras.",
		'ko-kr': "볼의 전기 주머니가 아직 발달하지 않았다.\n앞발의 볼록살을 열심히 비벼야\n겨우 전기가 만들어진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Punch",
			'fr-fr': "Koud'Poing",
			'es-es': "Puño",
			'it-it': "Pugno",
			'de-de': "Boxhieb",
			'pt-br': "Soco",
			'ko-kr': "펀치"
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
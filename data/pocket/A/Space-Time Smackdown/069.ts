import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'it-it': "Kirlia",
		'de-de': "Kirlia",
		'pt-br': "Kirlia",
		'ko-kr': "킬리아"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [281],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Ralts"
	},

	description: {
		'en-us': "It has a psychic power that enables it to distort the space around it and see into the future.",
		'fr-fr': "Grâce à ses pouvoirs psychiques, il peut distordre\nl'espace-temps et ainsi voir l'avenir.",
		'es-es': "Con sus poderes psíquicos puede deformar\nel espacio a su alrededor y predecir el futuro.",
		'it-it': "Sfruttando i suoi poteri psichici, può distorcere\nlo spazio circostante per prevedere l'avvenire.",
		'de-de': "Seine Psycho-Kräfte erlauben es ihm,\nden Raum um sich selbst zu verformen\nund so in die Zukunft zu sehen.",
		'pt-br': "Possui um poder psíquico que lhe permite distorcer\no espaço ao seu redor e ver o futuro.",
		'ko-kr': "사이코 파워를 조작해\n주변의 공간을 일그러뜨려\n미래를 내다볼 수 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'de-de': "Hieb",
			'pt-br': "Tapa",
			'ko-kr': "뺨치기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card

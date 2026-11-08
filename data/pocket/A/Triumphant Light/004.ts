import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'es-es': "Combee",
		'it-it': "Combee",
		'de-de': "Wadribie",
		'pt-br': "Combee",
		'ko-kr': "세꿀버리"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [415],
	hp: 50,
	types: ["Grass"],

	description: {
		'en-us': "At night, Combee sleep in a group of about a hundred, packed closely together in a lump.",
		'fr-fr': "À la nuit tombée, les Apitrini s'agglutinent\npar grappes de cent pour dormir.",
		'es-es': "Cuando llega la noche, se juntan unos cien\nCombee y duermen formando una gran colmena.",
		'it-it': "Scesa la notte, formano dei grandi alveari di\ncirca 100 esemplari e dormono raggruppati.",
		'de-de': "Des Nachts schmiegen sich bis zu 100 Wadribie\naneinander und formieren sich so zum Schlafen\nzu einem großen Gebilde.",
		'pt-br': "À noite, Combee dormem amontados\nem grupos de aproximadamente cem indivíduos.",
		'ko-kr': "밤이 되면 100마리 정도의\n세꿀버리가 모여\n커다란 덩어리가 되어 잠잔다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'de-de': "Käferbiss",
			'pt-br': "Picada",
			'ko-kr': "벌레먹기"
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

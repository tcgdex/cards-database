import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'es-es': "Seel",
		'it-it': "Seel",
		'de-de': "Jurob",
		'pt-br': "Seel",
		'ko-kr': "쥬쥬"
	},

	illustrator: "Masako Yamashita",
	category: "Pokemon",

	dexId: [86],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'de-de': "Kopfnuss",
			'pt-br': "Cabeçada",
			'ko-kr': "박치기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		'en-us': "Thanks to its thick fat, cold seas don't bother it at all, but it gets tired pretty easily in warm waters.",
		'fr-fr': "Sa couche de gras lui permet d'être à l'aise\ndans les eaux les plus froides. Il a par contre\nplus de mal à supporter les mers chaudes.",
		'es-es': "La gruesa capa de grasa que le permite\nnadar sin problemas en aguas frías le da\nmás de un sofoco en climas más cálidos.",
		'it-it': "Grazie al suo spesso strato di grasso nuota\ntranquillamente nell'acqua gelida. Nei mari\ncaldi rischia facilmente lo sfinimento.",
		'de-de': "Kalte Meere machen ihm dank seiner dicken\nFettschicht nichts aus. Wärmere Gewässer\nsetzen ihm hingegen sehr zu.",
		'pt-br': "Graças a sua gordura, os mares gelados não\nincomodam este Pokémon, mas ele fica cansado\nfacilmente em águas mornas.",
		'ko-kr': "두꺼운 지방 덕분에\n추운 바다는 문제없지만\n따뜻한 바다에서 쉽게 지친다."
	},

	boosters: ["pikachu"]
}

export default card

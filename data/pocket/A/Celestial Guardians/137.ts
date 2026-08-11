import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gumshoos",
		'fr-fr': "Argouste",
		'es-es': "Gumshoos",
		'it-it': "Gumshoos",
		'de-de': "Manguspektor",
		'pt-br': "Gumshoos",
		'ko-kr': "형사구스"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [735],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Yungoos"
	},

	description: {
		'en-us': "Once it finds signs of prey, it will patiently stake out the location, waiting until the sun goes down.",
		'fr-fr': "Lorsqu'il détecte les traces d'une proie,\nil attend patiemment à cet endroit et surveille\nles environs jusqu'au coucher du soleil.",
		'es-es': "Cuando detecta el rastro de una presa, se aposta pacientemente\nen ese lugar y permanece al acecho hasta que cae el sol.",
		'it-it': "Appena trova una traccia della sua preda, si\napposta pazientemente fino al calar del sole.",
		'de-de': "Findet Manguspektor Spuren potenzieller Beute,\nlegt es sich geduldig auf die Lauer und verharrt\nbis Sonnenuntergang am selben Ort.",
		'pt-br': "Assim que encontrar sinais de alguma presa, vigiará\npacientemente o local, esperando até que o sol se ponha.",
		'ko-kr': "먹잇감의 흔적을 발견하면\n해가 떨어질 때까지 그 자리에 머물며\n끈질기게 잠복한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Headbang",
			'fr-fr': "Frappe de Tête",
			'es-es': "Cabecear",
			'it-it': "Scuotitesta",
			'de-de': "Headbangen",
			'pt-br': "Baque de Cabeça",
			'ko-kr': "헤드뱅"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card
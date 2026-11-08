import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'es-es': "Koffing",
		'it-it': "Koffing",
		'de-de': "Smogon",
		'pt-br': "Koffing",
		'ko-kr': "또가스"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",

	dexId: [109],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Suffocating Gas",
			'fr-fr': "Gaz Suffocant",
			'es-es': "Gas Sofocante",
			'it-it': "Gas Soffocante",
			'de-de': "Würgegas",
			'pt-br': "Gás Asfixiante",
			'ko-kr': "가스로감싸기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.",
		'fr-fr': "Son corps est gonflé de gaz toxique. Il se rend dans les décharges,\nattiré par l'odeur des déchets alimentaires en décomposition.",
		'es-es': "Su cuerpo está lleno a rebosar de gas venenoso.\nAcude a los vertederos atraído por el putrefacto\nolor que emana de los desperdicios.",
		'it-it': "Il suo corpo è gonfio di gas velenosi. Va nelle\ndiscariche attratto dall'odore di rifiuti putrescenti.",
		'de-de': "Sein Körper ist zum Bersten voll mit Giftgas.\nAngelockt vom fauligen Geruch verrottender\nAbfälle, lungert es auf Müllhalden herum.",
		'pt-br': "Seu corpo é cheio de gás venenoso. Flutua\npara lixões à procura dos gases exalados\npor lixo apodrecido.",
		'ko-kr': "독가스로 몸 안이 가득 차 있다.\n음식물 쓰레기의 악취에\n이끌려 쓰레기장을 찾아간다."
	},

	boosters: ["mewtwo"]
}

export default card

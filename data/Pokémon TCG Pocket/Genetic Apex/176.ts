import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Koffing",
		fr: "Smogo",
		es: "Koffing",
		it: "Koffing",
		de: "Smogon",
		'pt-br': "Koffing",
		ko: "또가스"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Suffocating Gas",
			fr: "Gaz Suffocant",
			es: "Gas Sofocante",
			it: "Gas Soffocante",
			de: "Würgegas",
			'pt-br': "Gás Asfixiante",
			ko: "가스로감싸기"
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
		en: "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.",
		fr: "Son corps est gonflé de gaz toxique. Il se rend dans les décharges,\nattiré par l'odeur des déchets alimentaires en décomposition.",
		es: "Su cuerpo está lleno a rebosar de gas venenoso.\nAcude a los vertederos atraído por el putrefacto\nolor que emana de los desperdicios.",
		it: "Il suo corpo è gonfio di gas velenosi. Va nelle\ndiscariche attratto dall'odore di rifiuti putrescenti.",
		de: "Sein Körper ist zum Bersten voll mit Giftgas.\nAngelockt vom fauligen Geruch verrottender\nAbfälle, lungert es auf Müllhalden herum.",
		'pt-br': "Seu corpo é cheio de gás venenoso. Flutua\npara lixões à procura dos gases exalados\npor lixo apodrecido.",
		ko: "독가스로 몸 안이 가득 차 있다.\n음식물 쓰레기의 악취에\n이끌려 쓰레기장을 찾아간다."
	},

	boosters: ["mewtwo"]
}

export default card

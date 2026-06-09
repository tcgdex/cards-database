import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

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

	illustrator: "Naoyo Kimura",
	category: "Pokemon",

	dexId: [109],
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.",
		fr: "Son corps est gonflé de gaz toxique. Il se rend dans les décharges,\nattiré par l'odeur des déchets alimentaires en décomposition.",
		es: "Su cuerpo está lleno a rebosar de gas venenoso.\nAcude a los vertederos atraído por el putrefacto\nolor que emana de los desperdicios.",
		it: "Il suo corpo è gonfio di gas velenosi. Va nelle\ndiscariche attratto dall'odore di rifiuti putrescenti.",
		de: "Sein Körper ist zum Bersten voll mit Giftgas.\nAngelockt vom fauligen Geruch verrottender\nAbfälle, lungert es auf Müllhalden herum.",
		'pt-br': "Seu corpo é cheio de gás venenoso. Flutua\npara lixões à procura dos gases exalados\npor lixo apodrecido.",
		ko: "독가스로 몸 안이 가득 차 있다.\n음식물 쓰레기의 악취에\n이끌려 쓰레기장을 찾아간다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Division",
			fr: "Division",
			es: "División",
			it: "Serie",
			de: "Teilung",
			'pt-br': "Divisão",
			ko: "분열"
		},

		cost: ["Darkness"],

		effect: {
			en: "Put 1 random Koffing from your deck onto your Bench.",
			fr: "Placez une carte Smogo au hasard de votre deck sur votre Banc.",
			es: "Pon 1 Koffing aleatorio de tu baraja en tu Banca.",
			it: "Prendi un Koffing a caso dal tuo mazzo e mettilo nella tua panchina.",
			de: "Lege 1 zufälliges Smogon aus deinem Deck auf deine Bank.",
			'pt-br': "Coloque 1 Koffing aleatório do seu baralho no seu Banco.",
			ko: "자신의 덱에서 「또가스」를 랜덤으로 1장 벤치로 내보낸다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card

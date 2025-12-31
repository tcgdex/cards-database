import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Meowth",
		fr: "Miaouss",
		es: "Meowth",
		it: "Meowth",
		de: "Mauzi",
		'pt-br': "Meowth",
		ko: "나옹"
	},

	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pay Day",
			fr: "Jackpot",
			es: "Día de Pago",
			it: "Giornopaga",
			de: "Zahltag",
			'pt-br': "Dia de Pagamento",
			ko: "고양이돈받기"
		},

		cost: ["Colorless"],
		damage: 10,

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			de: "Ziehe 1 Karte.",
			'pt-br': "Compre 1 carta.",
			ko: "자신의 덱을 1장 뽑는다."
		}
	}],

	dexId: [52],

	hp: 60,

	description: {
		en: "All it does is sleep during the daytime. At night,\nit patrols its territory with its eyes aglow.",
		fr: "Il passe ses journées à dormir. La nuit venue,\nil patrouille sur son territoire, les yeux brillants.",
		es: "Durante el día, se dedica a dormir.\nDe noche, vigila su territorio con un brillo en los ojos.",
		it: "Di giorno non fa che dormire, mentre la notte\nperlustra il suo territorio con gli occhi luccicanti.",
		de: "Es schläft den ganzen Tag. Nachts patrouilliert es\nsein Revier mit glühenden Augen.",
		'pt-br': "Tudo o que este Pokémon faz é dormir\ndurante o dia. À noite, patrulha seu\nterritório com seus olhos brilhantes.",
		ko: "낮에는 거의 잠만 잔다.\n밤이 되면 눈을 반짝이며\n영역을 돌아다닌다."
	},

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card

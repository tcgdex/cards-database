import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pay Day",
			fr: "Jackpot",
			es: "Día de Pago",
			it: "Giornopaga",
			de: "Zahltag",
			'pt-br': "Dia de Pagamento",
			ko: "고양이돈받기"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			de: "Ziehe 1 Karte.",
			'pt-br': "Compre 1 carta.",
			ko: "자신의 덱을 1장 뽑는다."
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star",

	description: {
		en: "All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.",
		fr: "Il passe ses journées à dormir. La nuit venue,\nil patrouille sur son territoire, les yeux brillants.",
		es: "Durante el día, se dedica a dormir.\nDe noche, vigila su territorio con un brillo en los ojos.",
		it: "Di giorno non fa che dormire, mentre la notte\nperlustra il suo territorio con gli occhi luccicanti.",
		de: "Es schläft den ganzen Tag. Nachts patrouilliert es\nsein Revier mit glühenden Augen.",
		'pt-br': "Tudo o que este Pokémon faz é dormir\ndurante o dia. À noite, patrulha seu\nterritório com seus olhos brilhantes.",
		ko: "낮에는 거의 잠만 잔다.\n밤이 되면 눈을 반짝이며\n영역을 돌아다닌다."
	},

	boosters: ["charizard"]
}

export default card

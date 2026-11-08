import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'de-de': "Mauzi",
		'pt-br': "Meowth",
		'ko-kr': "나옹"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",

	dexId: [52],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Pay Day",
			'fr-fr': "Jackpot",
			'es-es': "Día de Pago",
			'it-it': "Giornopaga",
			'de-de': "Zahltag",
			'pt-br': "Dia de Pagamento",
			'ko-kr': "고양이돈받기"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'de-de': "Ziehe 1 Karte.",
			'pt-br': "Compre 1 carta.",
			'ko-kr': "자신의 덱을 1장 뽑는다."
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
		'en-us': "All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.",
		'fr-fr': "Il passe ses journées à dormir. La nuit venue,\nil patrouille sur son territoire, les yeux brillants.",
		'es-es': "Durante el día, se dedica a dormir.\nDe noche, vigila su territorio con un brillo en los ojos.",
		'it-it': "Di giorno non fa che dormire, mentre la notte\nperlustra il suo territorio con gli occhi luccicanti.",
		'de-de': "Es schläft den ganzen Tag. Nachts patrouilliert es\nsein Revier mit glühenden Augen.",
		'pt-br': "Tudo o que este Pokémon faz é dormir\ndurante o dia. À noite, patrulha seu\nterritório com seus olhos brilhantes.",
		'ko-kr': "낮에는 거의 잠만 잔다.\n밤이 되면 눈을 반짝이며\n영역을 돌아다닌다."
	},

	boosters: ["charizard"]
}

export default card

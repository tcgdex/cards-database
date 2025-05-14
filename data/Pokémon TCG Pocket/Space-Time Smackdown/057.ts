import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		de: "Elevoltek",
		'pt-br': "Electivire",
		ko: "에레키블"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Electabuzz"
	},

	description: {
		en: "The amount of electrical energy this Pokémon produces is proportional to the rate of its pulse. The voltage jumps while Electivire is battling.",
		fr: "La quantité d'électricité qu'il génère est\nproportionnelle à son pouls. Quand il livre\nun combat, son voltage augmente aussitôt.",
		es: "La cantidad de electricidad que genera es\nproporcional a su pulso. Al enzarzarse en\ncombate, su voltaje aumenta drásticamente.",
		it: "Produce una quantità di elettricità direttamente\nproporzionale alla sua frequenza cardiaca.\nDurante la lotta il voltaggio si alza all'istante.",
		de: "Wie viel Strom es erzeugt, ist abhängig von\nseinem Puls. Im Kampf steigt Elevolteks\nelektrische Spannung schlagartig an.",
		'pt-br': "A quantidade de energia elétrica que este Pokémon\nproduz é proporcional à sua pulsação. A voltagem\naumenta drasticamente quando Electivire está batalhando.",
		ko: "발전량은 심박 수에 비례한다.\n싸움이 시작되면\n단숨에 전압이 올라간다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Exciting Voltage"
		},

		damage: "40+",
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "If this Pokémon has at least 2 extra <span class=\"energy-text energy-text--type-lightning\"></span> Energy attached, this attack does 80 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card

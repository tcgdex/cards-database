import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Sizzlipede",
		fr: "Grillepattes",
		es: "Sizzlipede",
		it: "Sizzlipede",
		de: "Thermopod",
		'pt-br': "Sizzlipede",
		ko: "태우지네"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			de: "Nagen",
			'pt-br': "Roída",
			ko: "갉기"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot.",
		fr: "Il produit de la chaleur grâce au gaz inflammable\nqu'il emmagasine dans son corps. La partie jaune\nde son abdomen est particulièrement brûlante.",
		es: "Genera calor consumiendo el gas inflamable que\nalmacena en su cuerpo. Los círculos amarillos\ndel abdomen están particularmente calientes.",
		it: "Genera calore grazie ai gas combustibili\naccumulati nel suo corpo. Le parti gialle\ndel suo addome sono particolarmente calde.",
		de: "Mit dem entzündlichen Gas in seinem Körper\nerzeugt es Hitze. Die gelben Stellen an seinem\nBauch werden besonders heiß.",
		'pt-br': "Seu corpo armazena gás inflamável, que usa para\ngerar calor. As marcas amarelas na sua barriga\nficam especialmente quentes.",
		ko: "몸속에 모아둔 가연성 가스로\n열을 낸다. 특히 배 쪽의\n노란 부분이 뜨겁다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card

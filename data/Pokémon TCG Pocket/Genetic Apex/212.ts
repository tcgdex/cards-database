import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		de: "Picochilla",
		'pt-br': "Minccino",
		ko: "치라미"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Smack",
			fr: "Coup de Queue",
			es: "Bofetón Cola",
			it: "Codasberla",
			de: "Schweifschlag",
			'pt-br': "Ataque de Cauda",
			ko: "꼬리로때리기"
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
		en: "The way it brushes away grime with its tail can be helpful when cleaning. But its focus on spotlessness can make cleaning more of a hassle.",
		fr: "Il époussette les saletés avec sa queue. Il est d'une aide précieuse\npour faire le ménage, mais il est très tatillon sur la propreté.",
		es: "Usa la cola para barrer la basurilla.\nSu extrema pulcritud es tanto una ayuda\nen la limpieza del hogar como un incordio.",
		it: "Con la coda rimuove ogni traccia di sporco.\nÈ di grande aiuto per le pulizie, ma la sua\npignoleria può diventare estenuante.",
		de: "Es entfernt Schmutz mit seinem Schweif. Beim\nHausputz ist es eine große Hilfe, aber sein\nPutzfimmel kann auch anstrengend werden.",
		'pt-br': "A maneira como este Pokémon varre a sujeira com\na cauda pode ser útil na hora de fazer uma faxina, mas\nsua obsessão por limpeza pode tornar o processo uma chatice.",
		ko: "꼬리로 더러운 것을 떨어낸다.\n청소를 할 때는 도움이 되지만\n결벽증이 있어서 힘들기도 하다."
	}
}

export default card

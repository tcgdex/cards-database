import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Grumpig",
		fr: "Groret",
		es: "Grumpig",
		it: "Grumpig",
		de: "Groink",
		'pt-br': "Grumpig",
		ko: "피그킹"
	},

	illustrator: "Yukiko Baba",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Spoink"
	},

	description: {
		en: "It can perform odd dance steps to influence foes. Its style of dancing became hugely popular overseas.",
		fr: "La danse singulière qu'il exécute\npour manipuler ses adversaires fut\nautrefois très populaire à l'étranger.",
		es: "Para controlar a su rival usa unos curiosos pasos\nde baile, antaño muy populares en el extranjero.",
		it: "La strana danza che esegue per controllare il nemico\nera di gran moda tempo fa, in una regione lontana.",
		de: "Die seltsamen Tanzschritte, mit denen es seine\nGegner kontrolliert, erfreuten sich einst in\nanderen Regionen großer Beliebtheit.",
		'pt-br': "Ele é capaz de executar passos de dança únicos\npara influenciar os inimigos. Seu estilo de dança se tornou\naltamente popular no mundo todo.",
		ko: "상대를 조종할 때 사용하는\n이상한 스텝은 옛날에 외국에서\n크게 유행했던 적이 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Zen Headbutt",
			fr: "Psykoud'Boul",
			es: "Cabezazo Zen",
			it: "Cozzata Zen",
			de: "Zen-Kopfstoß",
			'pt-br': "Cabeçada Zen",
			ko: "사념의박치기"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
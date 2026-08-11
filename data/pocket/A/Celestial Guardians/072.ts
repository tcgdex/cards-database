import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Grumpig",
		'fr-fr': "Groret",
		'es-es': "Grumpig",
		'it-it': "Grumpig",
		'de-de': "Groink",
		'pt-br': "Grumpig",
		'ko-kr': "피그킹"
	},

	illustrator: "Yukiko Baba",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [326],
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Spoink"
	},

	description: {
		'en-us': "It can perform odd dance steps to influence foes. Its style of dancing became hugely popular overseas.",
		'fr-fr': "La danse singulière qu'il exécute\npour manipuler ses adversaires fut\nautrefois très populaire à l'étranger.",
		'es-es': "Para controlar a su rival usa unos curiosos pasos\nde baile, antaño muy populares en el extranjero.",
		'it-it': "La strana danza che esegue per controllare il nemico\nera di gran moda tempo fa, in una regione lontana.",
		'de-de': "Die seltsamen Tanzschritte, mit denen es seine\nGegner kontrolliert, erfreuten sich einst in\nanderen Regionen großer Beliebtheit.",
		'pt-br': "Ele é capaz de executar passos de dança únicos\npara influenciar os inimigos. Seu estilo de dança se tornou\naltamente popular no mundo todo.",
		'ko-kr': "상대를 조종할 때 사용하는\n이상한 스텝은 옛날에 외국에서\n크게 유행했던 적이 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Zen Headbutt",
			'fr-fr': "Psykoud'Boul",
			'es-es': "Cabezazo Zen",
			'it-it': "Cozzata Zen",
			'de-de': "Zen-Kopfstoß",
			'pt-br': "Cabeçada Zen",
			'ko-kr': "사념의박치기"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card
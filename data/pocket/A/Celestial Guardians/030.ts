import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
		'es-es': "Litten",
		'it-it': "Litten",
		'de-de': "Flamiau",
		'pt-br': "Litten",
		'ko-kr': "냐오불"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [725],
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "If you try too hard to get close to it, it won't open up to you. Even if you do grow close, giving it too much affection is still a no-no.",
		'fr-fr': "Il se renferme sur lui-même si on lui accorde\ntrop d'attention. Mieux vaut éviter de beaucoup\nle caresser, même s'il devient affectueux.",
		'es-es': "Detesta el contacto físico excesivo, incluso de\naquellos por los que siente apego. En caso de\nsentirse agobiado, se recluye en sí mismo.",
		'it-it': "Si chiude in se stesso se riceve attenzioni soffocanti. Anche\nse si affeziona, preferisce mantenere una certa distanza.",
		'de-de': "Gegenüber Menschen, die zu aufdringlich sind,\nverschließt es sich. Übermäßiger Körperkontakt\nist für Flamiau selbst bei guten Freunden tabu.",
		'pt-br': "Se você se esforçar demais para se aproximar deste Pokémon,\nele não dará a menor bola. Mesmo que você consiga\nse aproximar, Litten continuará detestando afeto em excesso.",
		'ko-kr': "집요하게 따라다니면\n마음을 열지 않는다. 친밀해져도\n과도한 스킨십은 금물이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Heat Tackle",
			'fr-fr': "Charge Énergétique",
			'es-es': "Placaje Ardiente",
			'it-it': "Calorazione",
			'de-de': "Hitze-Tackle",
			'pt-br': "Golpe de Colisão Aquecido",
			'ko-kr': "히트태클"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'ko-kr': "이 포켓몬에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card
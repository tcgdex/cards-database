import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Litten",
		fr: "Flamiaou",
		es: "Litten",
		it: "Litten",
		de: "Flamiau",
		'pt-br': "Litten",
		ko: "냐오불"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [725],
	hp: 60,
	types: ["Fire"],

	description: {
		en: "If you try too hard to get close to it, it won't open up to you. Even if you do grow close, giving it too much affection is still a no-no.",
		fr: "Il se renferme sur lui-même si on lui accorde\ntrop d'attention. Mieux vaut éviter de beaucoup\nle caresser, même s'il devient affectueux.",
		es: "Detesta el contacto físico excesivo, incluso de\naquellos por los que siente apego. En caso de\nsentirse agobiado, se recluye en sí mismo.",
		it: "Si chiude in se stesso se riceve attenzioni soffocanti. Anche\nse si affeziona, preferisce mantenere una certa distanza.",
		de: "Gegenüber Menschen, die zu aufdringlich sind,\nverschließt es sich. Übermäßiger Körperkontakt\nist für Flamiau selbst bei guten Freunden tabu.",
		'pt-br': "Se você se esforçar demais para se aproximar deste Pokémon,\nele não dará a menor bola. Mesmo que você consiga\nse aproximar, Litten continuará detestando afeto em excesso.",
		ko: "집요하게 따라다니면\n마음을 열지 않는다. 친밀해져도\n과도한 스킨십은 금물이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			de: "Kratzer",
			'pt-br': "Arranhão",
			ko: "할퀴기"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card
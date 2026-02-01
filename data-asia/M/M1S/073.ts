import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ハカドッグ"
	},
	illustrator: "Arai Kiriko",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	description: {
		ja: "普段は墓場で眠っている。数いる犬ポケモンの中でもっとも主に忠実だ。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "ボチ"
	},
	attacks: [{
		name: {
			ja: "ホラーバイト"
		},
		damage: 30,
		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、そのカードをのオモテを見て、相手の山札にもどして切る。"
		},
		cost: ["Psychic"]
	}, {
		name: {
			ja: "ぶちかます"
		},
		damage: 130,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],
	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [972]
}

export default card

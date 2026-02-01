import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "メガサーナイトex"
	},
	illustrator: "Raita Kazama",
	category: "Pokemon",
	hp: 360,
	types: ["Psychic"],
	stage: "Stage2",
	evolveFrom: {
		ja: "キルリア"
	},
	attacks: [{
		name: {
			ja: "あふれるねがい"
		},
		effect: {
			ja: "自分のベンチポケモン全員に、山札から「基本超エネルギー」を1枚ずつつける。そして山札を切る。"
		},
		cost: ["Psychic"]
	}, {
		name: {
			ja: "メガシンフォニア"
		},
		damage: "50×",
		effect: {
			ja: "自分のポケモン全員についている超エネルギーの数×50ダメージ。"
		},
		cost: ["Psychic"]
	}],
	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
	suffix: "EX",
	dexId: [282]
}

export default card

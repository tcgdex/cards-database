import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヨルノズク"
	},

	illustrator: "matazo",
	category: "Pokemon",
	dexId: [164],
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "非常に 柔らかい 羽は 飛ぶとき 音を 出さないので こっそり 獲物に 近づける。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ほうせきさがし"
		},

		effect: {
			'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、自分の場に「テラスタル」のポケモンがいるなら、1回使える。自分の山札からトレーナーズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "スピードウイング"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	rarity: "None"
}

export default card
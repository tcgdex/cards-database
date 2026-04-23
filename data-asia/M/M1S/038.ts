import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "フーディン"
	},
	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	description: {
		ja: "強力な超能力を操る。両手のスプーンはその力で作りだしたという。"
	},
	stage: "Stage2",
	evolveFrom: {
		ja: "ユンゲラー"
	},
	abilities: [{
		type: "Ability",
		name: {
			ja: "サイコドロー"
		},
		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を3枚引く。"
		}
	}],
	attacks: [{
		name: {
			ja: "ハンドパワー"
		},
		effect: {
			ja: "自分の手札の枚数×2個ぶんのダメカンを、相手のバトルポケモンにのせる。"
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
	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [65]
}

export default card

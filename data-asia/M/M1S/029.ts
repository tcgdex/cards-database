import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ジバコイル"
	},
	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	description: {
		ja: "怪電波を発信しながら空を飛びまわり未知の電波を受信しているという。"
	},
	stage: "Stage2",
	evolveFrom: {
		ja: "レアコイル"
	},
	attacks: [{
		name: {
			ja: "アッパースパーク"
		},
		damage: "50+",
		effect: {
			ja: "この番に、このポケモンが「レアコイル」から進化していたなら、120ダメージ追加。"
		},
		cost: ["Lightning"]
	}, {
		name: {
			ja: "フラッシュボルト"
		},
		damage: 160,
		effect: {
			ja: "次の自分の番、このポケモンは「フラッシュボルト」が使えない。"
		},
		cost: ["Lightning", "Lightning"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [462]
}

export default card

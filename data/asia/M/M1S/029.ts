import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジバコイル"
	},
	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	description: {
		'ja-jp': "怪電波を発信しながら空を飛びまわり未知の電波を受信しているという。"
	},
	stage: "Stage2",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840584,
				tcgplayer: 647280,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "レアコイル"
	},
	attacks: [{
		name: {
			'ja-jp': "アッパースパーク"
		},
		damage: "50+",
		effect: {
			'ja-jp': "この番に、このポケモンが「レアコイル」から進化していたなら、120ダメージ追加。"
		},
		cost: ["Lightning"]
	}, {
		name: {
			'ja-jp': "フラッシュボルト"
		},
		damage: 160,
		effect: {
			'ja-jp': "次の自分の番、このポケモンは「フラッシュボルト」が使えない。"
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

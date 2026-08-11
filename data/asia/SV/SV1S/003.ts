import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "メェークル",
		'zh-tw': "坐騎小羊",
		'th-th': "เมเคิล",
		'id-id': "Skiddo"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [672],
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "最近まで 山岳で 暮らす 人たちは メェークルの 背中に 乗って 山道を 移動していた。",
		'zh-tw': "一直到最近為止，都還有山岳的住民乘在坐騎小羊 的背上，在山路上移動。",
		'th-th': "ผู้คนที่อาศัยบนภูเขาจะขี่หลังเมเคิลเพื่อเดินทางตามทางบนเขาจนถึงเมื่อไม่นานมานี้",
		'id-id': "Hingga dewasa ini, orang-orang yang hidup di pegunungan menunggangi punggung Skiddo dan menelusuri jalan gunung."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "つるのムチ",
			'zh-tw': "藤鞭",
			'th-th': "แส้เถาวัลย์",
			'id-id': "Cambuk Jalar"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "けとばす",
			'zh-tw': "踢飛",
			'th-th': "ดีด",
			'id-id': "Tendangan Penghempas"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692969,
				tcgplayer: 567120,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card
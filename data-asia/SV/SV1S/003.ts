import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "メェークル",
		'zh-tw': "坐騎小羊",
		th: "เมเคิล",
		id: "Skiddo"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [672],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "最近まで 山岳で 暮らす 人たちは メェークルの 背中に 乗って 山道を 移動していた。",
		'zh-tw': "一直到最近為止，都還有山岳的住民乘在坐騎小羊 的背上，在山路上移動。",
		th: "ผู้คนที่อาศัยบนภูเขาจะขี่หลังเมเคิลเพื่อเดินทางตามทางบนเขาจนถึงเมื่อไม่นานมานี้",
		id: "Hingga dewasa ini, orang-orang yang hidup di pegunungan menunggangi punggung Skiddo dan menelusuri jalan gunung."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "つるのムチ",
			'zh-tw': "藤鞭",
			th: "แส้เถาวัลย์",
			id: "Cambuk Jalar"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "けとばす",
			'zh-tw': "踢飛",
			th: "ดีด",
			id: "Tendangan Penghempas"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 692969
	}
}

export default card
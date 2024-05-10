import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "カイデン",
		'zh-tw': "電海燕"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [940],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "翼の 骨は 風を 受けると 電気を 作る。 海に 飛び込み 獲物を 感電させて 捕らえる。",
		'zh-tw': "當翅膀的骨頭受到風吹時，就能製造出電力。會衝進 海裡讓獵物觸電後將其捕獲。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふきあらす",
			'zh-tw': "揚風"
		},

		effect: {
			ja: "相手は相手自身の手札をすべて山札にもどして切る。その後、相手は山札を4枚引く。",
			'zh-tw': "對手將對手自己的手牌全部放回牌庫並重洗。然後，對手從牌庫抽出4張卡。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "はばたく",
			'zh-tw': "羽擊"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
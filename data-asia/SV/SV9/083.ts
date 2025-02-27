import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホップのココガラ",
		'zh-tw': "赫普的稚山雀",
		'zh-cn': "赫普的稚山雀"
	},

	illustrator: "Shinya Mizuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [821],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "メスは オスより 神経質。 羽を 汚されると 烈火のごとく 怒り くちばしで つつきまくる。",
		'zh-tw': "雌性比雄性還要神經質。 一旦羽毛被弄髒了， 就會滿腔怒火地用鳥嘴猛啄。",
		'zh-cn': "雌性比雄性還要神經質。 一旦羽毛被弄髒了， 就會滿腔怒火地用鳥嘴猛啄。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "こわいしせん",
			'zh-tw': "恐怖視線",
			'zh-cn': "恐怖視線"
		},

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "つつく",
			'zh-tw': "啄",
			'zh-cn': "啄"
		},

		damage: 20
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
	regulationMark: "I"
}

export default card
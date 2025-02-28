import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホップのアオガラス",
		'zh-tw': "赫普的藍鴉",
		'zh-cn': "赫普的藍鴉"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [822],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "頭が 良く くちばしと 足で 扱える 道具なら 簡単に 使い方を 覚えてしまうぞ。",
		'zh-tw': "頭腦聰明，凡是靠鳥嘴 和爪子能夠操控的工具， 牠都可以輕易地學會用法。",
		'zh-cn': "頭腦聰明，凡是靠鳥嘴 和爪子能夠操控的工具， 牠都可以輕易地學會用法。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "スピードひこう",
			'zh-tw': "高速飛行",
			'zh-cn': "高速飛行"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "するどいはね",
			'zh-tw': "銳利羽",
			'zh-cn': "銳利羽"
		},

		damage: 80
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
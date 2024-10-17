import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛毛角羊",
		'zh-cn': "毛毛角羊",
		ja: "バイウールー"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "用牠那彈力十足的毛 織成的地毯就像是彈簧墊， 可以站上去蹦蹦跳。",
		'zh-cn': "用牠那彈力十足的毛 織成的地毯就像是彈簧墊， 可以站上去蹦蹦跳。",
		ja: "弾力の ある 毛で 織った カーペットは トランポリンみたいで 乗れば ピョンピョン 跳ねるのだ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "柔軟羊毛",
			'zh-cn': "柔軟羊毛",
			ja: "やわらかウール"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
			'zh-cn': "這隻寶可夢受到招式的傷害「-30」點。",
			ja: "このポケモンが受けるワザのダメージは「-30」される。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "搗碎",
			'zh-cn': "搗碎",
			ja: "つきくずす"
		},

		effect: {
			'zh-tw': "若希望，將場上的競技場卡丟棄。",
			'zh-cn': "若希望，將場上的競技場卡丟棄。",
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [832]
}

export default card
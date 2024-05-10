import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ベトベトン",
		'zh-tw': "臭臭泥"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [89],
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "汚い ヘドロが 全身に まとわりつく。 足跡に 触っただけで 毒に 侵される。",
		'zh-tw': "全身上下沾滿污泥。光是碰到牠的足跡， 都會受到毒素的侵襲。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どくぶくろ",
			'zh-tw': "毒袋"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のどくのポケモンは、進化・退化してもどくが回復しない。",
			'zh-tw': "只要這隻寶可夢在場上，對手的【中毒】的寶可夢，就算進化・退化，【中毒】也不會恢復。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ポイズンアタック",
			'zh-tw': "猛毒攻擊"
		},

		damage: 100,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card
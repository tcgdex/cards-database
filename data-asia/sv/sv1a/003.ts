import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "モロバレル",
		'zh-tw': "敗露球菇"
	},

	illustrator: "Nobuhiro Imagawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [591],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "吹き出す 毒の胞子に 注意。 浴びた 部分から モロバレルの カサに 似た キノコが 生えてくる。",
		'zh-tw': "小心牠噴出的毒孢子。因為被噴到的地方會長出蘑菇， 形狀像是敗露球菇的菌傘。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "あぶないほうし",
			'zh-tw': "險惡孢子"
		},

		damage: 60,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくとマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【中毒】與【麻痺】。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card
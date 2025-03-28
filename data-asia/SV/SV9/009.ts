import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "アギルダー",
		'zh-tw': "敏捷蟲",
		'zh-cn': "敏捷蟲"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [617],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "殻を 脱ぎ捨て 身軽に なった。 帯状の 粘膜を 体に 巻きつけ 乾燥を 防ぐ。",
		'zh-tw': "脫殼後變得更輕巧了。 為了防止乾燥，會將 帶狀的黏膜裹在身上。",
		'zh-cn': "脫殼後變得更輕巧了。 為了防止乾燥，會將 帶狀的黏膜裹在身上。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "うつせみポイズン",
			'zh-tw': "褪殼猛毒",
			'zh-cn': "褪殼猛毒"
		},

		damage: 70,

		effect: {
			ja: "相手のバトルポケモンをどくとこんらんにする。このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】與【混亂】。將這隻寶可夢與備戰寶可夢互換。",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】與【混亂】。將這隻寶可夢與備戰寶可夢互換。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card
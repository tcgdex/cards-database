import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ベラカス",
		'zh-tw': "蟲甲聖",
		'zh-cn': "蟲甲聖"
	},

	illustrator: "Masako Tomii",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [954],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "玉の中に 赤ん坊が 眠る。 心地よく 眠れるように 脚で 玉を まわして あやしているのだ。",
		'zh-tw': "為了讓在球裡睡覺的寶寶 可以睡得更加香甜，會用腳 轉著球，讓寶寶感到安穩。",
		'zh-cn': "為了讓在球裡睡覺的寶寶 可以睡得更加香甜，會用腳 轉著球，讓寶寶感到安穩。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "トリプルドロー",
			'zh-tw': "三重抽出",
			'zh-cn': "三重抽出"
		},

		effect: {
			ja: "自分の山札を3枚引く。",
			'zh-tw': "從自己的牌庫抽出3張卡。",
			'zh-cn': "從自己的牌庫抽出3張卡。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "どんでんがえし",
			'zh-tw': "絕地反攻",
			'zh-cn': "絕地反攻"
		},

		damage: "40+",

		effect: {
			ja: "自分の山札の残り枚数が3枚以下なら、200ダメージ追加。",
			'zh-tw': "若自己的牌庫的剩餘張數為3張以下，則增加200點傷害。",
			'zh-cn': "若自己的牌庫的剩餘張數為3張以下，則增加200點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
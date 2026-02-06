import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飄浮泡泡 太陽的樣子",
		'zh-cn': "飄浮泡泡 太陽的樣子",
		ja: "ポワルン たいようのすがた"
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "飄浮泡泡在天氣晴朗時的樣子。 在把牠放到暖爐前面的實驗中， 牠並沒有變成這種形態。",
		'zh-cn': "飄浮泡泡在天氣晴朗時的樣子。 在把牠放到暖爐前面的實驗中， 牠並沒有變成這種形態。",
		ja: "晴れた 日の ポワルンの 姿。 ヒーターの前に 置く 実験では この 形に 変化しなかった。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "灼熱",
			'zh-cn': "灼熱",
			ja: "こがす"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			'zh-cn': "將對手的戰鬥寶可夢【灼傷】。",
			ja: "相手のバトルポケモンをやけどにする。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "陽光支援",
			'zh-cn': "陽光支援",
			ja: "サニーアシスト"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量卡，全部改附於1隻備戰寶可夢身上。",
			'zh-cn': "將這隻寶可夢身上附加的能量卡，全部改附於1隻備戰寶可夢身上。",
			ja: "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H",
	rarity: "Common",
	dexId: [351],

	thirdParty: {
		cardmarket: 787566
	}
}

export default card
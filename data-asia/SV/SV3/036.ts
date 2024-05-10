import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ボルトロス",
		'zh-tw': "雷電雲",
		th: "โวลโทลอส"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [642],
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "大空を 飛び回りながら あちこちに 雷を 落として 山火事を 起こすので 嫌われる。",
		'zh-tw': "一邊在空中飛來飛去，一邊四處打雷引發森林大火，因此受到厭惡。",
		th: "เป็นที่รังเกียจเพราะบินวนไปมาบนฟ้าปล่อยสายฟ้าตามที่ต่าง ๆ จนเกิดไฟไหม้ป่า"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "あくてんこう",
			'zh-tw': "壞天氣",
			th: "อากาศเลวร้าย"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けない。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，自己的所有備戰寶可夢不會受到對手的招式的傷害。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ โปเกมอนบนเบนช์ฝ่ายเราทุกตัว จะไม่ได้รับแดเมจของท่าต่อสู้จากฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "ギガントボルト",
			'zh-tw': "巨烈伏特",
			th: "กิกันต์โวลต์"
		},

		damage: 140,

		effect: {
			ja: "このポケモンにも90ダメージ。",
			'zh-tw': "這隻寶可夢也受到90點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 90 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card
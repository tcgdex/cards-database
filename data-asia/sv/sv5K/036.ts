import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴルーグ",
		'zh-tw': "泥偶巨人",
		th: "โกลูก"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [623],
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "古代人の お城の 壁には ゴルーグが ビームを 撃つための 砲台の ような 台座が ある。",
		'zh-tw': "古代人城堡的牆壁裡那像炮台一樣的底座是為了 讓泥偶巨人發射光束而建的。",
		th: "ที่กำแพงปราสาทของมนุษย์ยุคโบราณ มีแท่นที่มีลักษณะคล้ายแท่นปืนใหญ่เพื่อให้โกลูกยิงลำแสงออกมา"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "てっぺき",
			'zh-tw': "鐵壁",
			th: "กำแพงเหล็ก"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "とうしのこぶし",
			'zh-tw': "鬥志之拳",
			th: "หมัดนักสู้"
		},

		damage: "120+",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、120ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加120點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card
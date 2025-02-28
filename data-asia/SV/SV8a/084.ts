import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルチャブル",
		id: "Hawlucha",
		th: "ลูจาบูล",
		'zh-tw': "摔角鷹人",
		'zh-cn': "摔角鷹人"
	},

	illustrator: "GOSSAN",
	rarity: "None",
	category: "Pokemon",
	dexId: [701],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "翼を 使い 軽やかに 跳び 相手を 華麗に 仕留める 技は 生まれ育った 森で 磨かれる。",
		id: "Serangan Hawlucha untuk mengakhiri lawannya secara elok dengan terbang lincah menggunakan sayapnya diasah di hutan tempat ia lahir dan dibesarkan.",
		th: "ทักษะการบินที่ปราดเปรียวและสามารถจัดการอีกฝ่ายอย่างสง่างามนั้นได้รับการขัดเกลาในป่าที่เกิดและเติบโต",
		'zh-tw': "使用翅膀輕盈地跳起後， 華麗地置對手於死地的招式 是在出生的森林磨練出來的。",
		'zh-cn': "使用翅膀輕盈地跳起後， 華麗地置對手於死地的招式 是在出生的森林磨練出來的。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フライングエントリー",
			id: "Flying Entry",
			th: "ฟลายอิงเอ็นทรี",
			'zh-tw': "飛身進場",
			'zh-cn': "飛身進場"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のベンチポケモン2匹に、それぞれダメカンを1個のせる。",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Letakkan masing-masing sejumlah 1 Token Kerusakan pada 2 Pokémon Cadangan lawan.",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง วางตัวนับแดเมจ บนโปเกมอนบนเบนช์ฝ่ายตรงข้าม 2 ตัว ตัวละ 1 ตัว",
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。在對手的2隻備戰寶可夢身上，各放置1個傷害指示物。",
			'zh-cn': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。在對手的2隻備戰寶可夢身上，各放置1個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "つばさでうつ",
			id: "Pukulan Sayap",
			th: "โจมตีด้วยปีก",
			'zh-tw': "翅膀攻擊",
			'zh-cn': "翅膀攻擊"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
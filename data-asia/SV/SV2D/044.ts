import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ナゲツケサル",
		'zh-tw': "投擲猴",
		th: "นาเกสึเคซารุ",
		id: "Passimian"
	},

	illustrator: "Jerky",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [766],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "硬い 木の実を 投げて 戦う。 ボールを 投げるのが 下手くそな トレーナーの 言うことは 聞かない。",
		'zh-tw': "會投出堅硬的樹果戰鬥。不會聽從投球技術差勁的 訓練家所下的指示。",
		th: "สู้โดยการปาผลไม้แข็ง ไม่เชื่อฟังเทรนเนอร์ที่ปาบอลไม่ได้เรื่อง",
		id: "Passimian bertarung dengan melempar beri yang keras. Pokémon ini tidak patuh kepada pelatih yang payah dalam melempar bola."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "アシストパス",
			'zh-tw': "助攻",
			th: "แอสซิสต์พาส",
			id: "Assist Pass"
		},

		damage: 70,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu pindahkan ke Pokémon Cadangan."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
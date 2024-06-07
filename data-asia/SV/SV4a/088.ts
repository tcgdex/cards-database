import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミミッキュ",
		'zh-tw': "謎擬Ｑ",
		th: "มิมิคคิว",
		id: "Mimikyu"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	dexId: [778],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "陽の 当たらない 暗がりに 棲む。 人前に 出るときは ピカチュウに 似せた 布で 全身を 隠す。",
		'zh-tw': "棲息在陽光照射不到的陰暗處。在人們面前現身時會用 看似皮卡丘的布來隱藏全身。",
		th: "อาศัยอยู่ในที่มืดไร้แสงแดด เวลาปรากฏตัวให้คนเห็นจะสวมผ้าคล้ายพิคาชูปกปิดตัวเอง",
		id: "Pokémon ini hidup di dalam kegelapan yang tidak terkena cahaya matahari. Mimikyu mengenakan kain berbentuk Pikachu untuk menyembunyikan dirinya saat keluar di hadapan umum."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しんぴのまもり",
			'zh-tw': "神秘守護",
			th: "พลังคุ้มภัย",
			id: "Proteksi Mistis"
		},

		effect: {
			ja: "このポケモンは、相手の「ポケモンex・V」からワザのダメージを受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【ex】・【V】」招式的傷害。",
			th: "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จาก [โปเกมอน【ex】 /【V】] ฝ่ายตรงข้าม",
			id: "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon {ex}/{V} lawan."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ゴーストアイ",
			'zh-tw': "幽靈之眼",
			th: "โกสต์อาย",
			id: "Ghost Eye"
		},

		effect: {
			ja: "相手のバトルポケモンに、ダメカンを7個のせる。",
			'zh-tw': "在對手的戰鬥寶可夢身上放置7個傷害指示物。",
			th: "วางตัวนับแดเมจ 7 ตัว บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม",
			id: "Letakkan 7 Token Kerusakan pada Pokémon Bertarung lawan."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
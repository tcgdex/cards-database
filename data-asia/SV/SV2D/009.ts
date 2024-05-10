import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ワナイダー",
		'zh-tw': "操陷蛛",
		th: "วาไนเดอร์",
		id: "Spidops"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [918],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "木の枝や 天井に 糸で 張りつき 音もなく 行動する。 獲物に 気づかれる前に 倒す。",
		'zh-tw': "用絲線吸附在樹枝或天花板上無聲無息地移動。會在自己 被察覺到之前將獵物打倒。",
		th: "ใช้ใยในการห้อยตัวจากกิ่งไม้หรือเพดานและเคลื่อนไหวอย่างเงียบเชียบ จัดการเหยื่อก่อนที่พวกมันจะรู้ตัว",
		id: "Spidops bergerak tanpa bersuara, bergelantung di atas pohon atau langit-langit menggunakan benangnya. Pokémon ini mengalahkan mangsanya sebelum ketahuan."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "まきこみトラップ",
			'zh-tw': "捲入陷阱",
			th: "กับดักพันพัว",
			id: "Jebakan Melibatkan"
		},

		effect: {
			ja: "おたがいのバトルポケモンと、ついているすべてのカードを、それぞれの山札にもどして切る。［バトル場に次のポケモンを出すのは自分から。］",
			'zh-tw': "將雙方的戰鬥寶可夢與附加的卡，全部放回各自的牌庫並重洗。[自己先將下一隻寶可夢放置於戰鬥場。]",
			th: "นำโปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดของแต่ละฝ่ายแล้วสับ {ฝ่ายเราเริ่มวางโปเกมอนตัวถัดไปบนตำแหน่งต่อสู้ก่อน}",
			id: "Kocok kembali Pokémon Bertarung kedua pemain dan semua kartu yang dikenakannya ke Deck masing-masing. [Pemain memasukkan Pokémon berikutnya ke Arena Bertarung terlebih dahulu.]"
		}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			ja: "ぶちかます",
			'zh-tw': "頭突",
			th: "ตบหนัก",
			id: "Hantaman Penuh Tenaga"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card
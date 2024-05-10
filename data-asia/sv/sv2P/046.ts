import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンカラス",
		'zh-tw': "烏鴉頭頭",
		th: "ดอนคาราซึ",
		id: "Honchkrow"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [430],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "情け容赦ない 性格。 子分の ヤミカラスの 失敗は 絶対に 許さないと 言われる。",
		'zh-tw': "性格冷酷，不留情面。據說絕不會容許手下的 黑暗鴉有任何的失敗。",
		th: "นิสัยโหดเหี้ยม ว่ากันว่าจะไม่ยอมยกโทษให้กับความผิดพลาดของยามิคาราซึที่เป็นลูกน้องเด็ดขาด",
		id: "Honchkrow memiliki kepribadian yang tidak kenal ampun. Dikatakan bahwa ia tidak akan memaafkan kegagalan Murkrow, para anak buahnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "はばたく",
			'zh-tw': "羽擊",
			th: "ตีปีก",
			id: "Mengepak"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ダーティスロー",
			'zh-tw': "惡劣投擲",
			th: "เดอร์ตี้โธรว์",
			id: "Dirty Throw"
		},

		damage: 140,

		effect: {
			ja: "自分の手札を1枚トラッシュする。トラッシュできないなら、このワザは失敗。",
			'zh-tw': "將自己的1張手牌丟棄。若無法丟棄，則這個招式失敗。",
			th: "ทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ด ถ้าทิ้งการ์ดไม่ได้ ท่าต่อสู้นี้จะล้มเหลว",
			id: "Buang 1 lembar Kartu Pegangan sendiri ke Trash. Jika tidak dapat membuangnya ke Trash, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
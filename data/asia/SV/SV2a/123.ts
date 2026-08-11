import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ストライク",
		'zh-tw': "飛天螳螂",
		'th-th': "สไตรค์",
		'id-id': "Scyther",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "切れ味 鋭い カマを 使って 草むらを 切り進む。 あまりに 速い 動きで 目が 追いつかない。",
		'zh-tw': "會用鋒利的鐮刀割開草叢前進。因為動作實在太快， 甚至無法用肉眼看清。",
		'th-th': "ใช้เคียวคมกริบถางหญ้าที่ขวางทาง เคลื่อนไหวได้เร็วจนมองตามไม่ทัน",
		'id-id': "Scyther melaju sambil memotong rerumputan menggunakan sabit tajamnya. Pergerakannya tidak bisa diikuti karena terlalu cepat.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "アシストスラッシュ",
				'zh-tw': "輔助斬",
				'th-th': "แอสซิสต์สแลช",
				'id-id': "Assist Slash",
			},
			damage: 20,
			cost: ["Grass"],
			effect: {
				'ja-jp': "自分のトラッシュから「基本[G]エネルギー」を1枚選び、ベンチポケモンにつける。",
				'zh-tw': "從自己的棄牌區選擇1張「基本【草】能量」卡，附於備戰寶可夢身上。",
				'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
				'id-id': "Pilih 1 lembar Energi Dasar {Daun} dari Trash sendiri, lalu kenakan pada Pokémon Cadangan.",
			},
		},
		{
			name: {
				'ja-jp': "スライスブレード",
				'zh-tw': "利刃切割",
				'th-th': "สไลซ์เบลด",
				'id-id': "Slicing Blade",
			},
			damage: 70,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719576,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837472,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837473,
			},
		},
	],

	retreat: 0,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [123],
};

export default card;

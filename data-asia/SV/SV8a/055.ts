import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノイバラ",
		id: "Iron Thorns",
		th: "หนามเหล็ก",
		'zh-tw': "鐵荊棘",
		'zh-cn': "鐵荊棘"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "None",
	category: "Pokemon",
	dexId: [995],
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "ある 探検記で テツノイバラと 紹介されている 物体と 一致する 特徴が ある。",
		id: "Terdapat karakteristik yang cocok dengan objek bernama Iron Thorns yang diperkenalkan oleh sebuah jurnal ekspedisi pada Pokémon ini.",
		th: "มีลักษณะเด่นตรงกับวัตถุที่แนะนำว่าเป็นหนามเหล็กในบันทึกการสำรวจเล่มหนึ่ง",
		'zh-tw': "有一部分的特徵與 某本探險記裡以鐵荊棘 來介紹的物體一致。",
		'zh-cn': "有一部分的特徵與 某本探險記裡以鐵荊棘 來介紹的物體一致。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "デスタプレッサー",
			id: "Destructive Presser",
			th: "บีบอัดแหลกลาญ",
			'zh-tw': "壊死壓榨",
			'zh-cn': "壊死壓榨"
		},

		damage: "70×",

		effect: {
			ja: "自分の山札を上から5枚オモテにして、その中にある「未来」のカードの枚数×70ダメージ。オモテにした「未来」のカードはトラッシュし、残りのカードは山札にもどして切る。",
			id: "Balikkan 5 kartu dari atas Deck sendiri sehingga sisi depannya menjadi menghadap ke atas, serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembar kartu Futur yang ada di antaranya. Buang kartu Futur yang sisi depannya dijadikan menghadap ke atas tersebut ke Trash, lalu kocok kembali sisa kartu ke Deck.",
			th: "หงายการ์ด 5 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา ทำแดเมจเท่ากับจำนวนการ์ด [อนาคต] ที่อยู่ในนั้น x70 ทิ้งการ์ด [อนาคต] ที่หงายไว้ที่ตำแหน่งทิ้งการ์ด การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
			'zh-tw': "將自己的牌庫上方5張卡翻到正面，造成其中的「未來」卡的張數×70點傷害。將翻到正面的「未來」卡丟棄，將剩餘卡放回牌庫並重洗。",
			'zh-cn': "將自己的牌庫上方5張卡翻到正面，造成其中的「未來」卡的張數×70點傷害。將翻到正面的「未來」卡丟棄，將剩餘卡放回牌庫並重洗。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			ja: "メガトンラリアット",
			id: "Megaton Lariat",
			th: "เมกะตันแลเรียท",
			'zh-tw': "百萬噸金勾臂",
			'zh-cn': "百萬噸金勾臂"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card
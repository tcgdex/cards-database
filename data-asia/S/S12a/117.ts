import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "百變怪",
		th: "เมตามอน",
		ja: "メタモン"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "能夠藉由重組全身的細胞，變得與看到的東西一模一樣， 然而一旦放鬆就會變回原形。",
		th: "ประกอบเปลี่ยนเซลล์ทั่วร่างและแปลงร่างให้เหมือนกับสิ่งที่เห็นได้เป๊ะแต่ถ้าผ่อนแรงจะกลับเป็นแบบเดิม",
		ja: "全身の 細胞を 組み替えて 見たもの そっくりに 変身するが 力が 抜けると もとにもどる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "突然變化",
			th: "เปลี่ยนร่างฉับพลัน",
			ja: "いきなりへんげ"
		},

		effect: {
			'zh-tw': "這隻寶可夢可使用自己棄牌區的【基礎】寶可夢（「擁有規則的寶可夢」除外）持有的所有招式。[需要有足夠使用招式的能量。]",
			th: "โปเกมอนนี้ สามารถใช้ท่าต่อสู้ของโปเกมอน[พื้นฐาน]บนตำแหน่งทิ้งการ์ดฝ่ายเรา (ยกเว้น [โปเกมอนที่มีกฎ] ) ได้ทั้งหมด {จำเป็นต้องใช้พลังงานสำหรับใช้ท่าต่อสู้}",
			ja: "このポケモンは、自分のトラッシュにあるたねポケモン（「ルールを持つポケモン」をのぞく）が持っているワザを、すべて使える。［ワザを使うためのエネルギーは必要。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [132]
}

export default card
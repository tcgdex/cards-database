import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "クイタラン",
		'zh-tw': "熔蟻獸",
		th: "คุยทาแรน"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [631],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "しっぽの 穴から 空気を 取りこみ 炎を 燃やす。 穴を 塞がれると 具合が 悪くなる。",
		'zh-tw': "從尾部的孔洞吸入空氣，燃起火焰。如果孔洞被 堵住了，身體就會不舒服。",
		th: "สูบอากาศผ่านรูที่หางเพื่อทำให้เปลวไฟลุกไหม้ ถ้ารูถูกปิดจะรู้สึกไม่สบาย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひだね",
			'zh-tw': "火種",
			th: "เชื้อไฟ"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "なめやきファイヤー",
			'zh-tw': "滑燒火焰",
			th: "ไฟเลียเผา"
		},

		damage: 130,

		effect: {
			ja: "コインを3回投げ、ウラの数ぶん、このポケモンについているエネルギーを選び、トラッシュする。",
			'zh-tw': "擲3次硬幣，選擇與反面出現的次數相同數量的這隻寶可夢身上附加的能量，將其丟棄。",
			th: "ทอยเหรียญ 3 ครั้ง เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ ตามจำนวนครั้งที่ออกก้อย ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "チルット",
		'zh-tw': "青綿鳥",
		th: "ทิลท์โท"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [333],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "自分も まわりも きれいでないと 落ち着かない 性格。 汚れを 見つけると 羽で ふき取る。",
		'zh-tw': "如果自己和周圍不乾淨，就靜不下心來的性格。見到髒污會用羽毛擦掉。",
		th: "ถ้าตัวเองและรอบข้างไม่สะอาดจะรู้สึกกระสับกระส่าย พอเจอสิ่งสกปรกจะใช้ปีกเช็ด"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つつく",
			'zh-tw': "啄",
			th: "จิก"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きずをなおす",
			'zh-tw': "療傷",
			th: "รักษาบาดแผล"
		},

		effect: {
			ja: "自分のポケモン1匹のHPを「30」回復する。",
			'zh-tw': "將自己的1隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [30]"
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
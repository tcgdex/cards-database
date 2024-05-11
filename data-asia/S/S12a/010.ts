import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "音箱蟀",
		th: "โคโรท็อก"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "用短刀般的手臂發出聲音。所奏出 的旋律隨個體不同而異，從中尋找 自己喜愛的旋律也是一大樂事。",
		th: "ใช้แขนที่มีลักษณะราวกับมีดสั้นส่งเสียงออกมา ท่วงทำนองนั้นจะแตกต่างกันไปตามแต่ละตัว เพราะฉะนั้นถ้าหาท่วงทำนองที่ถูกใจได้ก็จะดีไม่น้อย"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "充溢旋律",
			th: "เสียงดนตรีที่เอ่อล้น"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的場上的所有【草】寶可夢（「音箱蟀」除外）的最大HP各增加「40」。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ HP สูงสุดของโปเกมอน[หญ้า]บนกระดานฝ่ายเราทุกตัว (ยกเว้น [โคโรท็อก] ) จะเพิ่มขึ้นตัวละ [40] แม้จะมีโปเกมอนที่มีความสามารถนี้กี่ตัวก็ตาม เอฟเฟกต์นี้จะไม่เกิดผลซ้ำ"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "劈開",
			th: "ฟันแหลก"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card
import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小火馬",
		th: "โพนีตะ",
		ja: "ポニータ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "剛出生的時候不擅長奔跑，但隨著和夥伴們不斷地賽跑， 會逐漸鍛鍊出強健的腳力。",
		th: "ช่วงแรกเกิดจะวิ่งไม่เก่ง แต่เมื่อได้วิ่งแข่งกับเพื่อนพ้อง ขาและสะโพกก็จะค่อย ๆ พัฒนาจนแข็งแกร่งขึ้น",
		ja: "生まれたばかりは 走るのが へた。 仲間と かけっこを するうちに 足腰が 強く 育っていく。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "猛撞",
			th: "พุ่งเข้าใส่",
			ja: "とっしん"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 10 ด้วย",
			ja: "このポケモンにも10ダメージ。"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [77]
}

export default card
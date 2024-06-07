import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドラン♂",
		'zh-tw': "尼多朗",
		th: "นิโดรัน♂",
		id: "Nidoran♂"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [32],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "小柄だが 勇ましい 性質。 仲良しの メスを 守るため 身を ていして 果敢に 戦う。",
		'zh-tw': "體型嬌小，但性情勇猛。為了保護感情好的雌性， 會奮不顧身地勇敢戰鬥。",
		th: "แม้ตัวจะเล็กแต่มีนิสัยกล้าหาญ เพื่อปกป้องตัวเมียที่สนิทสนมด้วยจะเอาตัวเข้าแลกต่อสู้อย่างมุ่งมั่น",
		id: "Nidoran jantan tubuhnya kecil, tapi memiliki sifat pemberani. Demi melindungi betina yang akrab dengannya, Pokémon ini mempertaruhkan nyawanya dan bertarung dengan gagah berani."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "つのでつく",
			'zh-tw': "角撞",
			th: "เขาขวิด",
			id: "Tusukan Tanduk"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
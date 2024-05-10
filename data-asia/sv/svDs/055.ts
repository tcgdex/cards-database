import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "พาโม",
		id: "Pawmi"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		th: "อุ้งมือคืออวัยวะปล่อยกระแสไฟฟ้า หลังจากที่ลุกขึ้นยืนด้วยขาหลังอย่างทุลักทุเลก็จะปล่อยไฟฟ้าออกมาจากอุ้งมือ",
		id: "Bantalan tangannya adalah organ pelepasan listrik. Setelah berhasil berdiri dengan kaki belakangnya, Pawmi melepaskan serangan listrik dari telapak tangannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ประกายไฟ",
			id: "Berpijar-pijar"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
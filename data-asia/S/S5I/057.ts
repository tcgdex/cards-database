import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大舌頭",
		th: "เบโรรินกา"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "會用舌頭把髒污舔乾淨。舔過的地方會有點臭，是否真的乾淨令人懷疑。",
		th: "จะใช้ลิ้นเลียทำความสะอาดรอยสกปรก แต่หลังจากที่เลียจะเหมือนมีกลิ่นเหม็น เลยยังน่าสงสัยว่าสะอาดจริงหรือเปล่า"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "舌擊",
			th: "ตีด้วยลิ้น"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "頭突",
			th: "ตบหนัก"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card
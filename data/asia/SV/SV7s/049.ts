import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คุวากานอน",
		id: "Vikavolt"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		th: "อุ้มเด็นจิมูชิไว้และรับไฟฟ้าจากเด็นจิมูชิ ยิงลำแสงคลื่นแม่เหล็กรุนแรงออกมาจากขากรรไกรขนาดใหญ่ได้อย่างต่อเนื่อง",
		id: "Vikavolt mendapatkan listrik dengan membawa Charjabug dan menembakkan sinar elektromagnet yang kuat secara beruntun dari dagu besarnya."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "โวลต์เชนจ์",
			id: "Volt Change"
		},

		effect: {
			th: "สลับโปเกมอนนี้กับโปเกมอน[สายฟ้า]บนเบนช์",
			id: "Tukar Pokémon ini dengan Pokémon {Listrik} di Cadangan."
		},

		damage: 90,
		cost: ["Lightning"]
	}, {
		name: {
			th: "สปาร์กกิงแอทแทก",
			id: "Sparking Attack"
		},

		damage: 240,
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
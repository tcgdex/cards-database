import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เนียรุมา",
		'id-id': "Glameow"
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'th-th': "พอไม่พอใจปุ๊บก็จะกางเล็บออกมา แต่นิสัยที่บางครั้งจะร้องครางในลำคอเพื่อออดอ้อนกลับเป็นที่นิยมในคนบางกลุ่ม",
		'id-id': "Glameow mencakar jika tidak senang, tetapi kadang mendengkur dan bersifat manja sehingga sebagian orang sangat menyukainya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "จับแขวน",
			'id-id': "Mengait"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
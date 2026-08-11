import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スナバァ",
		'zh-tw': "沙丘娃",
		'th-th': "ซึนาบา",
		'id-id': "Sandygast"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [769],
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "スコップを なくすと 木の枝などを 代わりに 挿し 新たな スコップが 見つかるまで 気を 紛らわす。",
		'zh-tw': "萬一鏟子弄丟了，就會用樹枝等東西插著代替，好讓牠在 找到新鏟子前能分散注意力。",
		'th-th': "หากทำพลั่วหาย จะปลอบใจตัวเองโดยหาสิ่งอื่น เช่น กิ่งไม้ มาปักแทนจนกว่าจะหาพลั่วใหม่ได้",
		'id-id': "Jika Sandygast menghilangkan sekopnya, ia menancapkan ranting pohon atau benda lainnya sebagai pengganti hingga menemukan sekop yang baru."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "つぶやく",
			'zh-tw': "囈語",
			'th-th': "งึมงำ",
			'id-id': "Bergumam"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "マッドショット",
			'zh-tw': "泥巴射擊",
			'th-th': "มัดช็อต",
			'id-id': "Mud Shot"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705333,
				tcgplayer: 565891,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card
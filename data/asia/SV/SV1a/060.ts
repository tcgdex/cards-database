import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤトウモリ",
		'zh-tw': "夜盜火蜥",
		'th-th': "ยาโทโมริ",
		'id-id': "Salandit"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [757],
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "獲物を 挑発して 狭い 岩場に 誘い込み フラフラになる 毒ガスを 吹きかけ 仕留めるのだ。",
		'zh-tw': "會挑釁獵物並引進狹窄的岩堆裡，接著噴出能造成 頭暈的毒瓦斯後奪其性命。",
		'th-th': "ยั่วยุและหลอกล่อเหยื่อให้เข้าไปในซอกหินแคบ ๆ แล้วพ่นแก๊สพิษที่จะทำให้โซเซใส่ก่อนจัดการอีกฝ่าย",
		'id-id': "Salandit menantang lawan dan memancingnya ke celah bebatuan yang sempit. Lalu, Pokémon ini mengeluarkan gas beracun yang membuat sempoyongan dan menghabisi lawannya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "ガスでつつむ",
			'zh-tw': "瓦斯包圍",
			'th-th': "ห่อหุ้มด้วยแก๊ส",
			'id-id': "Gas yang Menyelimuti"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'ja-jp': "ひっかく",
			'zh-tw': "抓",
			'th-th': "ข่วน",
			'id-id': "Menggaruk"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701114,
				tcgplayer: 568183,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card
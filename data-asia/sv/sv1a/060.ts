import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤトウモリ",
		'zh-tw': "夜盜火蜥",
		th: "ยาโทโมริ",
		id: "Salandit"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [757],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "獲物を 挑発して 狭い 岩場に 誘い込み フラフラになる 毒ガスを 吹きかけ 仕留めるのだ。",
		'zh-tw': "會挑釁獵物並引進狹窄的岩堆裡，接著噴出能造成 頭暈的毒瓦斯後奪其性命。",
		th: "ยั่วยุและหลอกล่อเหยื่อให้เข้าไปในซอกหินแคบ ๆ แล้วพ่นแก๊สพิษที่จะทำให้โซเซใส่ก่อนจัดการอีกฝ่าย",
		id: "Salandit menantang lawan dan memancingnya ke celah bebatuan yang sempit. Lalu, Pokémon ini mengeluarkan gas beracun yang membuat sempoyongan dan menghabisi lawannya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ガスでつつむ",
			'zh-tw': "瓦斯包圍",
			th: "ห่อหุ้มด้วยแก๊ส",
			id: "Gas yang Menyelimuti"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ひっかく",
			'zh-tw': "抓",
			th: "ข่วน",
			id: "Menggaruk"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
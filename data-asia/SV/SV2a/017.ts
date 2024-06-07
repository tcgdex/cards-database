import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピジョン",
		'zh-tw': "比比鳥",
		th: "พีเจียน",
		id: "Pidgeotto"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [17],
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "広い 縄張りを 持っており 侵入する 邪魔者は 徹底的に つつかれてしまう。",
		'zh-tw': "擁有著廣闊的地盤。 要是有哪個討厭鬼膽敢入侵， 就會遭到牠的瘋狂啄擊。",
		th: "มีอาณาเขตกว้างขวาง ผู้ที่บุกรุกเข้ามาในอาณาเขตจะถูกไล่จิกจนพรุน",
		id: "Pidgeotto memiliki wilayah teritorial yang luas. Pokémon ini mematuk secara menyeluruh penyusup yang memasuki wilayah teritorialnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はばたく",
			'zh-tw': "羽擊",
			th: "ตีปีก",
			id: "Mengepak"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card
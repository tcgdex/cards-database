import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "バネブー",
		'zh-tw': "跳跳豬",
		th: "บาเนบู",
		id: "Spoink"
	},

	illustrator: "GOSSAN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [325],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "飛び跳ねていないと 死んでしまう。 頭に 乗せている 真珠が サイコパワーを 増幅させるのだ。",
		'zh-tw': "如果不保持跳動就會死亡。戴在頭上的珍珠能讓 自己的精神力量增強。",
		th: "ถ้าไม่กระโดดเด้งดึ๋งไปมาก็จะตาย ไข่มุกบนหัวจะช่วยขยายพลังจิตให้รุนแรงขึ้น",
		id: "Spoink akan mati jika tidak melompat-lompat. Mutiara di kepala Pokémon ini meningkatkan kekuatan psikokinesisnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "はねる",
			'zh-tw': "躍起",
			th: "ดิ้นกระแด่ว",
			id: "Melompat"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞",
			th: "กระแทก",
			id: "Menyeruduk"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
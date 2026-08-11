import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "バネブー",
		'zh-tw': "跳跳豬",
		'th-th': "บาเนบู",
		'id-id': "Spoink"
	},

	illustrator: "GOSSAN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [325],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "飛び跳ねていないと 死んでしまう。 頭に 乗せている 真珠が サイコパワーを 増幅させるのだ。",
		'zh-tw': "如果不保持跳動就會死亡。戴在頭上的珍珠能讓 自己的精神力量增強。",
		'th-th': "ถ้าไม่กระโดดเด้งดึ๋งไปมาก็จะตาย ไข่มุกบนหัวจะช่วยขยายพลังจิตให้รุนแรงขึ้น",
		'id-id': "Spoink akan mati jika tidak melompat-lompat. Mutiara di kepala Pokémon ini meningkatkan kekuatan psikokinesisnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "はねる",
			'zh-tw': "躍起",
			'th-th': "ดิ้นกระแด่ว",
			'id-id': "Melompat"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ぶつかる",
			'zh-tw': "衝撞",
			'th-th': "กระแทก",
			'id-id': "Menyeruduk"
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701090,
				tcgplayer: 568159,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card
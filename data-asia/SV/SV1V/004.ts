import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "コフーライ",
		'zh-tw': "粉蝶蛹",
		th: "โคฟูไร",
		id: "Spewpa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [665],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "決まった 棲み処を 持たない。 気の向くまま 野山を 歩きまわり 進化の エネルギーを 蓄える。",
		'zh-tw': "沒有固定的住處。會隨心所欲地在山野走來走去， 蓄積進化時所需的能量。",
		th: "ไม่มีที่อยู่อาศัยที่แน่นอน เดินวนไปมาตามป่าเขาตามใจชอบ คอยสะสมพลังงานสำหรับวิวัฒนาการ",
		id: "Spewpa tidak memiliki tempat tinggal yang tetap. Pokémon ini berjalan mengelilingi gunung mengikuti kata hatinya, dan mengumpulkan energi untuk berevolusi."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "てきおうしんか",
			'zh-tw': "適應進化",
			th: "ปรับตัววิวัฒนาการ",
			id: "Evolusi Adaptasi"
		},

		effect: {
			ja: "このポケモンは、最初の自分の番や、出したばかりの番でも進化できる。",
			'zh-tw': "這隻寶可夢就算在自己的最初回合或者剛使出的回合，也可進化。",
			th: "โปเกมอนนี้ แม้จะเป็นเทิร์นแรกสุดของฝ่ายเรา หรือเทิร์นที่เพิ่งออกมาก็สามารถวิวัฒนาการได้",
			id: "Pokémon ini juga dapat dievolusikan pada giliran pertama pemain dan pada giliran Pokémon ini dimasukkan."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "むしくい",
			'zh-tw': "蟲咬",
			th: "แมลงกัด",
			id: "Gigitan Serangga"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693078
	}
}

export default card
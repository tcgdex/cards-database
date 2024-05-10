import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "コフキムシ",
		'zh-tw': "粉蝶蟲",
		th: "โคฟูคิมูชิ",
		id: "Scatterbug"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [664],
	hp: 30,
	types: ["Grass"],

	description: {
		ja: "毒の粉を まき散らして 敵を 追い払う。 棲んでいる 土地により エサにする 植物が 違う。",
		'zh-tw': "會灑出毒粉趕走敵人。棲息的土地不同，作為 食糧的植物也就不同。",
		th: "โปรยผงพิษเพื่อขับไล่ศัตรู พืชที่กินเป็นอาหารจะแตกต่างกันไปตามพื้นที่ที่อาศัยอยู่",
		id: "Scatterbug mengusir lawannya dengan menyebarkan bubuk beracun. Tumbuhan yang menjadi makanannya berbeda-beda tergantung daerah tempat ia tinggal."
	},

	stage: "Basic",

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
			ja: "たいあたり",
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน",
			id: "Serudukan"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "キルリア",
		'zh-tw': "奇魯莉安",
		th: "เคอเรีย",
		id: "Kirlia"
	},

	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	dexId: [281],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		ja: "ラルトス"
	},

	description: {
		ja: "サイコパワーを 操り まわりの 空間を ねじ曲げることで 未来を 見通すことができる。",
		'zh-tw': "能夠操縱精神力量來扭曲周圍的空間， 讓自己看見未來。",
		th: "สามารถมองเห็นอนาคตได้โดยการบิดเบือนมิติรอบ ๆ ด้วยพลังจิต",
		id: "Dengan membengkokkan dimensi ruang di sekitarnya menggunakan kekuatan psikokinesis, Kirlia dapat melihat masa depan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "マジカルショット",
			'zh-tw': "魔法射擊",
			th: "เมจิคัลช็อต",
			id: "Magical Shot"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			ja: "サイコキネシス",
			'zh-tw': "精神強念",
			th: "ไซโคคิเนซิส",
			id: "Psikis"
		},

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x20",
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		},

		damage: "60+",
		cost: ["Psychic", "Psychic", "Colorless"]
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
	regulationMark: "G",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746463,
				tcgplayer: 567475,
				cardtrader: 269709,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577341,
			},
		},
	]
}

export default card
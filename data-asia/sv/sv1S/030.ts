import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "フワライド",
		'zh-tw': "隨風球",
		th: "ฟูวาไรด์",
		id: "Drifblim"
	},

	illustrator: "Yuu Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [426],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "体の 中で ガスを 作ったり 吐き出したり することで 空を 飛ぶ 高さを 調節する。",
		'zh-tw': "會在體內製造氣體或是吐出氣體 來調節飛在空中的高度。",
		th: "สร้างแก๊สในร่างกายและปล่อยออกมาเพื่อปรับเปลี่ยนความสูงตอนบินบนท้องฟ้า",
		id: "Drifblim mengatur ketinggian terbangnya dengan menciptakan dan memuntahkan gas dari dalam tubuhnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かぜおこし",
			'zh-tw': "起風",
			th: "เรียกลม",
			id: "Hembusan Angin"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			ja: "のろいをばらまく",
			'zh-tw': "散佈詛咒",
			th: "กระจายคำสาป",
			id: "Menebar Kutukan"
		},

		effect: {
			ja: "ダメカン8個を、相手のポケモンに好きなようにのせる。",
			'zh-tw': "將8個傷害指示物以任意方式放置於對手的寶可夢身上。",
			th: "วางตัวนับแดเมจ 8 ตัว บนโปเกมอนฝ่ายตรงข้ามตามชอบ",
			id: "Letakkan sejumlah 8 Token Kerusakan pada Pokémon lawan sesukanya."
		}
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
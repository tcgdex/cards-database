import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴースト",
		'zh-tw': "鬼斯通",
		th: "โกสท์",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "壁をすり抜け 何処にでも 姿 現す 恐ろしき悪霊。 舌で 舐められし者 日に日に 衰弱し 死に至るとの噂。",
		'zh-tw': "能夠穿牆透壁，出現在任何地方的 恐怖惡靈。傳說被牠的舌頭舔過的人 將會日漸衰弱，最後喪命。",
		th: "เป็นวิญญาณชั่วร้ายอันน่ากลัวที่สามารลอดผ่านกำแพงและปรากฏกายได้ในทุกหนทุกแห่ง ลือกันว่าผู้ใดที่ถูกมันเลีย ผู้นั้นจะอ่อนกำลังลงทุกวัน ๆ และเสียชีวิตไปในที่สุด",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "のろいのしずく",
				'zh-tw': "詛咒水滴",
				th: "หยาดหยดแห่งคำสาป",
			},
			cost: ["Psychic"],
			effect: {
				ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。",
				'zh-tw': "將3個傷害指示物以任意方式放置於對手的寶可夢身上。",
				th: "วางตัวนับแดเมจ 3 ตัวบนโปเกมอนฝ่ายตรงข้ามตามชอบ",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687527,
				tcgplayer: 571585,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577458,
			},
		},
	],

	evolveFrom: {
		ja: "ゴース",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "None",
	dexId: [93],
};

export default card;

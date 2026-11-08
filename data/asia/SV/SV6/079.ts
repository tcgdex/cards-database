import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドラメシヤ",
		'zh-tw': "多龍梅西亞",
		'th-th': "โดราเมชิยะ",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'ja-jp': "食べもしないのに ウデッポウに 食らいつくのは 生きていたころの 行動の 名残りと 言われている。",
		'zh-tw': "明明不吃卻又愛死咬著 鐵臂槍蝦不放，聽說是牠 生前殘留下來的活動習性。",
		'th-th': "ว่ากันว่าที่มันชอบกัดอุเด็ปโปไว้ไม่ปล่อยแม้จะไม่กินเป็นอาหารนั้นเป็นการกระทำที่มันเคยทำตอนที่มันยังมีชีวิต",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ちょっとうらむ",
				'zh-tw': "咒怨一下",
				'th-th': "เจ็บแค้นหน่อย",
			},
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: {
				'ja-jp': "かみつく",
				'zh-tw': "咬住",
				'th-th': "กัดติด",
			},
			damage: 40,
			cost: ["Fire", "Psychic"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767172,
				tcgplayer: 568069,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [885],
};

export default card;

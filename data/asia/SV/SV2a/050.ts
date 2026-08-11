import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ディグダ",
		'zh-tw': "地鼠",
		'th-th': "ดิกดา",
		'id-id': "Diglett",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	description: {
		'ja-jp': "地下１メートルくらいを 掘りすすみ 木の根っこなどを かじって 生きる。 たまに 地上に 顔を出す。",
		'zh-tw': "在大約１公尺深的地底挖洞前進，靠啃食樹根之類的東西生存。 偶爾會到地面上露個臉。",
		'th-th': "ขุดโพรงในดินลึกประมาณ 1 เมตร ใช้ชีวิตโดยการกัดกินรากไม้ นาน ๆ ทีจะโผล่ขึ้นมาเหนือดิน",
		'id-id': "Diglett menggali tanah kira-kira sedalam 1 meter dan hidup dengan memakan akar tumbuhan. Terkadang Pokémon ini naik ke permukaan tanah.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "とびだしヘッド",
				'zh-tw': "魯莽頭擊",
				'th-th': "กระโดดโหม่ง",
				'id-id': "Sundulan Meloncat",
			},
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: {
				'ja-jp': "どろかけ",
				'zh-tw': "擲泥",
				'th-th': "สาดโคลน",
				'id-id': "Semprotan Lumpur",
			},
			damage: 30,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719492,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837317,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837318,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [50],
};

export default card;

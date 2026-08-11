import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "アイアント",
		'zh-tw': "鐵蟻",
		th: "ไอแอนท์",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "大きな顎は 岩石をも かみ砕く。 サダイジャから タマゴを 守るため 群れで 戦う。",
		'zh-tw': "巨大的顎部能咬碎岩石。為了不讓沙螺蟒把蛋搶走，會和其他同類一起並肩戰鬥。",
		th: "กรามใหญ่นี้แม้จะเป็นหินก็กัดบดจนแหลกได้ ต่อสู้กันเป็นฝูงเพื่อปกป้องไข่จากซาไดจา",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はさむ",
				'zh-tw': "夾住",
				th: "หนีบ",
			},
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: {
				ja: "くいあらす",
				'zh-tw': "亂吃",
				th: "สวาปาม",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場の「アイアント」の数ぶん、相手の山札を上からトラッシュする。",
				'zh-tw': "將對手的牌庫上方與自己的場上的「鐵蟻」數量相同數量的卡丟棄。",
				th: "ทิ้งการ์ดจากด้านบนสุดของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ดตามจำนวน [ไอแอนท์] บนกระดานฝ่ายเรา",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533237,
				tcgplayer: 568951,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [632],
};

export default card;

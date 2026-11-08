import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サンドパン",
		'zh-tw': "穿山王",
		'th-th': "แซนด์แพน",
		'id-id': "Sandslash",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'ja-jp': "鋭い ツメを ひっかけて 木を 登る。 下で 待つ サンドたちに 木の実を 落とし 分け与えるのだ。",
		'zh-tw': "會用銳利的爪子當作鉤子來爬樹。這是為了將樹果擊落， 分給在樹下等待的穿山鼠們。",
		'th-th': "ใช้กรงเล็บแหลมคมจิกและปีนขึ้นต้นไม้ เพื่อโยนผลไม้ลงมาแบ่งให้กับเหล่าแซนด์ที่รออยู่ด้านล่าง",
		'id-id': "Sandslash mendaki pohon dengan mengaitkan cakarnya yang tajam. Pokémon ini menjatuhkan beri dan membagikannya pada Sandshrew yang menanti di bawah pohon.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "じひびき",
				'zh-tw': "地鳴",
				'th-th': "พสุธากัมปนาท",
				'id-id': "Gelegar Tanah",
			},
			damage: 30,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
				'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
				'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur.",
			},
		},
		{
			name: {
				'ja-jp': "トゲでえぐる",
				'zh-tw': "針裂",
				'th-th': "คว้านด้วยหนาม",
				'id-id': "Duri Pengoyak",
			},
			damage: "80+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンにダメカンがのっているなら、100ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加100點傷害。",
				'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100",
				'id-id': "Jika Pokémon Bertarung lawan memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 100.",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719470,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837277,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837278,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "サンド",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [28],
};

export default card;

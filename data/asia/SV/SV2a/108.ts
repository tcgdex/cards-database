import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベロリンガ",
		'zh-tw': "大舌頭",
		'th-th': "เบโรรินกา",
		'id-id': "Lickitung",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "虫ポケモンが おもな エサ。 長い 舌で 相手を 舐めて 痺れた ところを 丸飲みにする。",
		'zh-tw': "蟲寶可夢是牠主要的食物。會用長長的舌頭去把對方 舔麻痺，然後趁機一口吞下。",
		'th-th': "โปเกมอนแมลงเป็นอาหารหลักของมัน มันจะใช้ลิ้นยาวเลียเหยื่อเพื่อทำให้ตัวชาแล้วกลืนกินเข้าไปทั้งตัว",
		'id-id': "Makanan utama Lickitung adalah Pokémon serangga. Pokémon ini melumpuhkan lawan dengan jilatan lidahnya yang panjang, lalu menelan lawannya bulat-bulat.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ベロベロバインド",
				'zh-tw': "舔舔制約",
				'th-th': "มัดติดแพล่บแพล่บ",
				'id-id': "Jilat-jilat Mengikat",
			},
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法使用招式。",
				'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ไม่ได้",
				'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan.",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719561,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837444,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837445,
			},
		},
	],

	retreat: 4,
	regulationMark: "G",
	rarity: "Common",
	dexId: [108],
};

export default card;

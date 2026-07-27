import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニドリーナ",
		'zh-tw': "尼多娜",
		th: "นิโดรินา",
		id: "Nidorina",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "群れに 危険が せまると 仲間で 結束して 超音波の 大合唱を おみまいするぞ。",
		'zh-tw': "有危險逼近群體時，會與夥伴們團結一致地 用超音波的大合唱來攻擊。",
		th: "หากมีภัยอันตรายเข้าใกล้ฝูงจะรวมกลุ่มกับพวกส่งเสียงร้องประสานความถี่สูงเข้าใส่เลยนะ",
		id: "Ketika bahaya mendekati gerombolannya, Nidorina membuat kesatuan dengan sesamanya untuk menyerang musuh menggunakan paduan suara gelombang ultrasonik.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ファミリーコール",
				'zh-tw': "家族呼喚",
				th: "แฟมิลีคอล",
				id: "Family Call",
			},
			cost: ["Darkness"],
			effect: {
				ja: "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
				th: "เลือกการ์ดโปเกมอนได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
				id: "Pilih paling banyak 3 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			},
		},
		{
			name: {
				ja: "するどいキバ",
				'zh-tw': "銳利之牙",
				th: "เขี้ยวคม",
				id: "Taring Tajam",
			},
			damage: 50,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719472,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837281,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837282,
			},
		},
	],

	evolveFrom: {
		ja: "ニドラン♀",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [30],
};

export default card;

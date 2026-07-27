import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュV",
		'zh-tw': "謎擬ＱV",
		th: "มิมิคคิวV",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ダミードール",
				'zh-tw': "虛構娃娃",
				th: "ดัมมี่ดอลล์",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。次の相手の番の終わりまで、この「ミミッキュV」は、相手のポケモンからワザのダメージを受けない。",
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。在下個對手的回合結束前，這隻「謎擬Ｑ【V】」不會受到對手的寶可夢招式的傷害。",
				th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง จนกว่าจะจบเทิร์นถัดไปของฝ่ายตรงข้าม [มิมิคคิว【V】] นี้ จะไม่ได้รับแดเมจจากท่าต่อสู้ของโปเกมอนฝ่ายตรงข้าม",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "うらやむひとみ",
				'zh-tw': "羨慕之瞳",
				th: "แววตาอิจฉา",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手がすでにとったサイドの枚数×3個ぶんのダメカンを、相手のバトルポケモンにのせる。",
				'zh-tw': "將與對手已經獲得的獎賞卡的張數×3個的相同數量的傷害指示物，放置於對手的戰鬥寶可夢身上。",
				th: "วางตัวนับแดเมจตามจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว x3 ตัว ที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 533357,
				tcgplayer: 568976,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [778],
};

export default card;

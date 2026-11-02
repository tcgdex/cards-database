import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ガオガエンex",
		'zh-tw': "熾焰咆哮虎ex",
		th: "กาโอกาเอ็นex",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ハッスルプレー",
				'zh-tw': "喧鬧競技",
				th: "เล่นสุดใจ",
			},
			effect: {
				ja: "相手のベンチポケモンの数ぶん、このポケモンがワザを使うための[C]エネルギーは少なくなる。",
				'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少對手的備戰寶可夢的數量。",
				th: "พลังงาน[ไร้สี]สำหรับใช้ท่าต่อสู้ของโปเกมอนนี้จะลดลง ตามจำนวนโปเกมอนบนเบนช์ฝ่ายตรงข้าม",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ブレイズボム",
				'zh-tw': "火焰炸彈",
				th: "เบลซบอมบ์",
			},
			damage: 240,
			cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752969,
				tcgplayer: 566236,
			},
		},
	],

	evolveFrom: {
		ja: "ニャヒート",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [727],

	suffix: "EX",
};

export default card;

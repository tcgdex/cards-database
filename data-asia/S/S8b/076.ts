import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュV",
		'zh-tw': "謎擬ＱV",
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
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。次の相手の番の終わりまで、この「ミミッキュV」は、相手のポケモンからワザのダメージを受けない。",
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。在下個對手的回合結束前，這隻「謎擬Ｑ【V】」不會受到對手的寶可夢招式的傷害。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "うらやむひとみ",
				'zh-tw': "羨慕之瞳",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手がすでにとったサイドの枚数×3個ぶんのダメカンを、相手のバトルポケモンにのせる。",
				'zh-tw': "將與對手已經獲得的獎賞卡的張數×3個的相同數量的傷害指示物，放置於對手的戰鬥寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586592,
				tcgplayer: 571329,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [778],
};

export default card;

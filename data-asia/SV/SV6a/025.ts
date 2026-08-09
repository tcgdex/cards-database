import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガチグマ アカツキ",
		'zh-tw': "月月熊 赫月",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "鉄のように 硬い 泥で 身を 守り 闇を 見通す 左目を 持つ 特別な ガチグマ。",
		'zh-tw': "會用堅硬如鐵的泥巴保護身體， 且擁有能夠看穿黑暗的左眼。 是特別的月月熊。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "けいけんそく",
				'zh-tw': "經驗法則",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札から「基本[F]エネルギー」を2枚まで選び、このポケモンにつける。",
				'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張「基本【鬥】能量」卡，附於這隻寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "マッドバイト",
				'zh-tw': "瘋狂啃咬",
			},
			damage: "100+",
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×30ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773774,
				tcgplayer: 566276,
			},
		},
	],

	retreat: 4,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [901],
};

export default card;

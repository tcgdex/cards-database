import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "イオルブ",
		'zh-tw': "以歐路普",
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "賢い ポケモンとして 有名。 大きな 脳みそは 強力な サイコパワーを もつ 証し。",
		'zh-tw': "以頭腦聰慧而聞名。大大的腦子是牠擁有 出眾精神力量的證明。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ジャミングアタッチ",
				'zh-tw': "阻礙貼附",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のトラッシュからエネルギーを3枚まで選び、相手のポケモンに好きなようにつける。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從對手的棄牌區選擇最多3張能量卡，以任意方式附於對手的寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ミステリーウェーブ",
				'zh-tw': "神秘波",
			},
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651069,
				tcgplayer: 569853,
			},
		},
	],

	evolveFrom: {
		ja: "レドームシ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [826],
};

export default card;

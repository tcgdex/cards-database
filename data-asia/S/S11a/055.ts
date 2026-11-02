import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホウオウV",
		'zh-tw': "鳳王V",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ふっかつのほのお",
				'zh-tw': "復活火焰",
			},
			effect: {
				ja: "このカードがトラッシュにあるなら、自分の番に1回使えて、使ったなら、自分の番は終わる。このカードをベンチに出す。その後、自分のトラッシュから基本エネルギーを4枚まで選び、このポケモンにつける。",
				'zh-tw': "若這張卡在棄牌區，則在自己的回合時可使用1次，若使用，則自己的回合結束。將這張卡放置於備戰區。然後，從自己的棄牌區選擇最多4張基本能量卡，附於這隻寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "レインボーバーン",
				'zh-tw': "彩虹烈焰",
			},
			damage: "100+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている基本エネルギーのタイプの数×30ダメージ追加。",
				'zh-tw': "增加這隻寶可夢身上附加的基本能量的屬性種類的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673053,
				tcgplayer: 570818,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [250],
};

export default card;

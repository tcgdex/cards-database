import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "バリヤード",
		'zh-tw': "魔牆人偶",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "振る舞い パントマイムが如く。 道化師 思い起こす 姿にて 指先より 発す 気力 用いて 透明な壁を作る。",
		'zh-tw': "行為舉止如同默劇表演，外貌則與小丑無異。能從指尖發出 氣場，造出透明的牆壁。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はたく",
				'zh-tw': "拍擊",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "トリックビンタ",
				'zh-tw': "戲法巴掌",
			},
			damage: 90,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手プレイヤーとジャンケンをし、自分が勝ったなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
				'zh-tw': "與對手玩家猜拳，若己方獲勝，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656325,
				tcgplayer: 570687,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577107,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [122],
};

export default card;

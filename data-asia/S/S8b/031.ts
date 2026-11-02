import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "オクタン",
		'zh-tw': "章魚桶",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "頑丈な 石頭。 吸盤つきの 脚を 絡ませ ひたすら 頭で 打ちすえる。",
		'zh-tw': "有著堅硬結實的腦袋。會用帶有吸盤的腳纏住對手， 然後不停地用頭猛撞。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "れんげきサーチ",
				'zh-tw': "連擊搜索",
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札から「れんげき」のカードを1枚選び、相手に見せて、手札に加える。そして山札を切る。この番、すでに別の「れんげきサーチ」を使っていたなら、この特性は使えない。",
				'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇1張「連擊」卡，在給對手看過後加入手牌。並且重洗牌庫。在這個回合，若已經使出了其他的「連擊搜索」，則這個特性無法使用。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "たきのぼり",
				'zh-tw': "攀瀑",
			},
			damage: 50,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586546,
				tcgplayer: 571284,
			},
		},
	],

	evolveFrom: {
		ja: "テッポウオ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [224],
};

export default card;

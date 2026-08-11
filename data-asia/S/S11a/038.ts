import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "サーナイト",
		'zh-tw': "沙奈朵",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "未来を 予知する 力を もつ。 トレーナーを 守る ときに 最大 パワーを 発揮する。",
		'zh-tw': "有著預知未來的能力。在保護訓練家的時候，會發揮出最強的力量。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "リファイン",
				'zh-tw': "洗鍊",
			},
			effect: {
				ja: "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を2枚引く。",
				'zh-tw': "在自己的回合時，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出2張卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "マジカルショット",
				'zh-tw': "魔法射擊",
			},
			damage: 120,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673036,
				tcgplayer: 570801,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570888,
			},
		},
	],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [282],
};

export default card;

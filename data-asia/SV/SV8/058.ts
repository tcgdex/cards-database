import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "イエッサン",
		'zh-tw': "愛管侍",
		'zh-cn': "愛管侍",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "つねに トレーナーの そばに いる。 サイコパワーで 行動を 予知して 身のまわりの 世話をする。",
		'zh-tw': "時時刻刻都待在訓練家身邊。 牠會以精神力量預知訓練家 的行動，以照料其日常起居。",
		'zh-cn': "時時刻刻都待在訓練家身邊。 牠會以精神力量預知訓練家 的行動，以照料其日常起居。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "せわやきヒール",
				'zh-tw': "悉心治癒",
				'zh-cn': "悉心治癒",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分のバトルポケモンのHPを「30」回復し、特殊状態も1つ回復する。",
				'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。將自己的戰鬥寶可夢恢復「30」HP，特殊狀態也恢復1個。",
				'zh-cn': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。將自己的戰鬥寶可夢恢復「30」HP，特殊狀態也恢復1個。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ちょうねんりき",
				'zh-tw': "超念力",
				'zh-cn': "超念力",
			},
			damage: 50,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793492,
				tcgplayer: 587638,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [876],
};

export default card;

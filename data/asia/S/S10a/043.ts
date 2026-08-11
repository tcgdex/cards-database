import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット",
		'zh-tw': "叉字蝠",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "両足が 羽に 変化。 音を たてずに 高速で 飛び 獲物の うなじに キバを たてる。",
		'zh-tw': "雙腳變成了翅膀。能夠無聲無息地高速飛行， 用獠牙咬住獵物的後頸。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "どくのキバ",
				'zh-tw': "毒牙",
			},
			damage: 50,
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
		{
			name: {
				ja: "クリティカルバイト",
				'zh-tw': "關鍵啃咬",
			},
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、30ダメージ。このワザのダメージで、相手のポケモンがきぜつしたなら、サイドを2枚多くとる。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到30點傷害。若對手的寶可夢因這個招式的傷害而【氣絕】，則多獲得2張獎賞卡。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656357,
				tcgplayer: 570706,
			},
		},
	],

	evolveFrom: {
		ja: "ゴルバット",
	},

	retreat: 0,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [169],
};

export default card;

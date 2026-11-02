import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ペラップ",
		'zh-tw': "聒噪鳥",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "人の 言葉を 覚えて 鳴く。 仲間が 一か所に 集まると みんな 同じ 言葉を 覚える。",
		'zh-tw': "學習人類的語言來鳴叫。當夥伴們聚集在同一個地方時，大家就會學會同樣的詞語。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "サイクルドロー",
				'zh-tw': "循環抽出",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札を1枚トラッシュする。その後、自分の山札を2枚引く。",
				'zh-tw': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出2張卡。",
			},
		},
		{
			name: {
				ja: "はばたく",
				'zh-tw': "羽擊",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673056,
				tcgplayer: 570821,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570903,
			},
		},
	],

	retreat: 0,
	regulationMark: "F",
	rarity: "Common",
	dexId: [441],
};

export default card;

import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "キュレム",
		'zh-tw': "酋雷姆",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "レシラムと ゼクロムを 凌ぐほどの 力を もつが 極低温の 冷気で 封じられてしまっている。",
		'zh-tw': "雖然擁有凌駕於萊希拉姆和 捷克羅姆之上的力量，但是那 力量已被極低溫冷氣封住了。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アンチプラズマ" },
			effect: {
				ja: "相手のトラッシュに、名前に「アクロマ」とつくカードがあるなら、このポケモンが「トライフロスト」を使うためのエネルギーは、[C]エネルギー1個になる。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "トライフロスト",
				'zh-tw': "‌‌[特性]反等離子",
			},
			cost: ["Water", "Water", "Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン3匹に、それぞれ110ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "若對手的棄牌區有‌名稱中有「‌阿克羅瑪」的卡，則這隻寶可夢使用「‌三重冰霜」所需的能量，改為1個【無】能量。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773796,
				tcgplayer: 566298,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [646],
};

export default card;

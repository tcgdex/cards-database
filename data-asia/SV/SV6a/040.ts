import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクト",
		'zh-tw': "蓋諾賽克特",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "プラズマ団によって 改造された 古代の むしポケモン。 背中の 大砲が パワーアップした。",
		'zh-tw': "被等離子隊改造過的 古代的蟲寶可夢。 背上的大砲力量得到了提升。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エースキャンセラー" },
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、相手は手札から「ACE SPEC」のカードを出して使えない。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "マグネブラスト",
				'zh-tw': "‌‌[特性]ACE消弭",
			},
			damage: 100,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773789,
				tcgplayer: 566291,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [649],
};

export default card;

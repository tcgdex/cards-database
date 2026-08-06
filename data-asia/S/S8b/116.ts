import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アーマーガアVMAX",
		'zh-tw': "鋼鎧鴉VMAX",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ラスターボディ",
				'zh-tw': "潔淨之軀",
			},
			effect: {
				ja: "このポケモンは、相手のポケモンから特性の効果を受けない。",
				'zh-tw': "這隻寶可夢不會受到對手的寶可夢的特性的效果的影響。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "キョダイハリケーン",
				'zh-tw': "超極巨風狂暴雨",
			},
			damage: 240,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「キョダイハリケーン」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「超極巨風狂暴雨」。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586632,
				tcgplayer: 571369,
			},
		},
	],

	evolveFrom: {
		ja: "アーマーガアV",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [823],
};

export default card;

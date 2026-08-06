import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ザルード",
		'zh-tw': "薩戮德",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "群れを つくり 密林で 暮らす。 とても 攻撃的で 森にすむ ポケモンたちから 恐れられている。",
		'zh-tw': "集結成群生活在密林裡。攻擊性很強，令棲息在森林的寶可夢們畏懼不已。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひきずりだす",
				'zh-tw': "拖出",
			},
			cost: ["Grass"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに20ダメージ。",
				'zh-tw': "選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到20點傷害。",
			},
		},
		{
			name: {
				ja: "さんれんのムチ",
				'zh-tw': "三連鞭",
			},
			damage: "70×",
			cost: ["Grass", "Grass"],
			effect: {
				ja: "コインを3回投げ、オモテの数×70ダメージ。",
				'zh-tw': "擲3次硬幣，造成正面出現的次數×70點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673007,
				tcgplayer: 570773,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [893],
};

export default card;

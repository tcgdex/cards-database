import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のフリーザー",
		'zh-tw': "<火箭隊的>急凍鳥",
		'zh-cn': "<火箭隊的>急凍鳥",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "氷を 自在に 操る 力を もつ。 永久凍土の 雪山に 棲んでいるという。",
		'zh-tw': "擁有能自在操縱冰的 能力。據說是棲息在 永凍之地的雪山中。",
		'zh-cn': "擁有能自在操縱冰的 能力。據說是棲息在 永凍之地的雪山中。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "レジストヴェール",
				'zh-tw': "抵抗之幕",
				'zh-cn': "抵抗之幕",
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の場のたねポケモンの「ロケット団のポケモン」全員は、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果は、なくならない。）",
				'zh-tw': "只要這隻寶可夢在場上，自己的場上所有【基礎】寶可夢的「火箭隊的寶可夢」，不會受到對手的寶可夢使用招式的效果的影響。（已經受到的效果不會消除。）",
				'zh-cn': "只要這隻寶可夢在場上，自己的場上所有【基礎】寶可夢的「火箭隊的寶可夢」，不會受到對手的寶可夢使用招式的效果的影響。（已經受到的效果不會消除。）",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ダークフロスト",
				'zh-tw': "暗黑冰霜",
				'zh-cn': "暗黑冰霜",
			},
			damage: "60+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに「ロケット団エネルギー」がついているなら、60ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有「火箭隊能量」，則增加60點傷害。",
				'zh-cn': "若這隻寶可夢身上附有「火箭隊能量」，則增加60點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821853,
				tcgplayer: 628663,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [144],
};

export default card;

import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のミュウツーex",
		'zh-tw': "<火箭隊的>超夢ex",
		'zh-cn': "<火箭隊的>超夢ex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "パワーセーバー",
				'zh-tw': "力量抑制者",
				'zh-cn': "力量抑制者",
			},
			effect: {
				ja: "自分の場の「ロケット団のポケモン」が4匹以上のときにしか、このポケモンはワザが使えない。",
				'zh-tw': "只有在自己的場上的「火箭隊的寶可夢」數量為4隻以上時，這隻寶可夢才可使用招式。",
				'zh-cn': "只有在自己的場上的「火箭隊的寶可夢」數量為4隻以上時，這隻寶可夢才可使用招式。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "イレイザーボール",
				'zh-tw': "擦除球",
				'zh-cn': "擦除球",
			},
			damage: "160+",
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "のぞむなら、自分のベンチポケモンについているエネルギーを2枚までトラッシュし、その枚数×60ダメージ追加。",
				'zh-tw': "若希望，將最多2張自己的備戰寶可夢身上附加的能量卡丟棄，增加其張數×60點傷害。",
				'zh-cn': "若希望，將最多2張自己的備戰寶可夢身上附加的能量卡丟棄，增加其張數×60點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821871,
				tcgplayer: 628680,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [150],

	suffix: "EX",
};

export default card;

import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ブロロローム",
		'zh-tw': "普隆隆姆",
		th: "โบรโรโรม",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "排気音で 激しく 威嚇する。 円筒形の 口から べろを 出して 毒液を まき散らす。",
		'zh-tw': "用排氣聲猛烈威嚇對手。 會從圓筒形的嘴巴 吐出舌頭並噴灑毒液。",
		th: "เสียงไอเสียนั้นข่มขวัญอีกฝ่ายเป็นอย่างมาก จะแลบลิ้นออกมาจากปากทรงกระบอกแล้วพ่นของเหลวพิษ",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "まきかえす",
				'zh-tw': "捲土重來",
				th: "โต้กลับ",
			},
			damage: "30+",
			cost: ["Colorless"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。",
				'zh-tw': "在上個對手的回合，若自己的寶可夢因招式的傷害而【昏厥】了，則增加90點傷害。",
				th: "ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนฝ่ายเรา[หมดสภาพ] ด้วยแดเมจของท่าต่อสู้ การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			},
		},
		{
			name: {
				ja: "つっぱしる",
				'zh-tw': "奔進",
				th: "วิ่งแรง",
			},
			damage: "100×",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×100ダメージ。",
				'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×100點傷害。",
				th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x100",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767171,
				tcgplayer: 568068,
			},
		},
	],

	evolveFrom: {
		ja: "ブロロン",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [966],
};

export default card;

import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "アーボック",
		'zh-tw': "阿柏怪",
		th: "อาร์บ็อก",
		ko: "아보크",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "お腹の 模様が 怖い 顔に 見える。 弱い 敵は その模様を 見ただけで 逃げ出してしまう。",
		'zh-tw': "腹部的花紋看起來像一張可怕的臉。弱小的敵人只要看到 這個花紋就會被嚇跑。",
		th: "ลวดลายที่ท้องดูเหมือนใบหน้าที่น่ากลัว ศัตรูที่อ่อนแอแค่เห็นลวดลายนั้นก็เผ่นหนีแล้ว",
		ko: "배의 무늬가 무서운 얼굴로 보인다. 약한 적은 그 무늬만 보고도 도망치고 만다.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "パニックどく",
				'zh-tw': "恐慌毒",
				th: "พิษตกใจ",
				ko: "패닉독",
			},
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくとやけどとこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】與【灼傷】與【混亂】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[ไหม้]และ[สับสน]",
				ko: "상대의 배틀 포켓몬을 독과 화상과 혼란으로 만든다.",
			},
		},
		{
			name: {
				ja: "やみのキバ",
				'zh-tw': "暗之牙",
				th: "เขี้ยวแห่งความมืด",
				ko: "어둠엄니",
			},
			damage: 70,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752860,
				tcgplayer: 568413,
			},
		},
	],

	evolveFrom: {
		ja: "アーボ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [24],
};

export default card;

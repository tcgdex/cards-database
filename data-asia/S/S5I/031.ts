import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "グライオン",
		'zh-tw': "天蠍王",
		th: "ไกลออน",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "羽音を 立てずに 空を 飛ぶ。 長い 尻尾で 獲物を 捕まえ キバで 急所を 一突き。",
		'zh-tw': "可不發出振翅聲而在空中飛行。先用長長的尾巴攫住獵物，再用牙齒朝弱點給予一刺。",
		th: "บินบนท้องฟ้าได้แบบไร้เสียง จะใช้หางที่ยาวจับเหยื่อแล้วใช้เขี้ยวแทงจุดอ่อน",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "アクロバット",
				'zh-tw': "雜技",
				th: "อะโครแบท",
			},
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×40ダメージ追加。",
				'zh-tw': "擲2次硬幣，增加正面出現的次數×40點傷害。",
				th: "ทอยเหรียญ 2 ครั้ง แดเมจเพิ่มตามจำนวนครั้งที่ออกหัว x40",
			},
		},
		{
			name: {
				ja: "ハサミギロチン",
				'zh-tw': "斷頭鉗",
				th: "กรรไกรกิโยติน",
			},
			damage: 90,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533377,
				tcgplayer: 568980,
			},
		},
	],

	evolveFrom: {
		ja: "グライガー",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [472],
};

export default card;

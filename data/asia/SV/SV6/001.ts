import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒマナッツ",
		'zh-tw': "向日種子",
		th: "ฮิมานัทส์",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "とても ひ弱。 襲われても 葉っぱを 必死に 振りまわして 追い払うのが やっとだ。",
		'zh-tw': "十分弱小。即使遭到攻擊， 也只能勉勉強強地靠著 拼命揮舞葉子來趕走敵人。",
		th: "อ่อนแอมาก ถึงถูกโจมตีก็ทำได้แค่พยายามเหวี่ยงใบไม้เพื่อไล่อีกฝ่ายอย่างสุดกำลังเท่านั้น",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "タネマシンガン",
				'zh-tw': "種子機關槍",
				th: "ปืนกลเมล็ดพืช",
			},
			damage: "10×",
			cost: ["Grass"],
			effect: {
				ja: "コインを4回投げ、オモテの数×10ダメージ。",
				'zh-tw': "擲4次硬幣，造成正面出現的次數×10點傷害。",
				th: "ทอยเหรียญ 4 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 766969,
				tcgplayer: 567991,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [191],
};

export default card;

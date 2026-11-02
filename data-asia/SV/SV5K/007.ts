import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "モンメン",
		'zh-tw': "木棉球",
		th: "โมนเมน",
		ko: "소미안",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "綿を 飛ばして 身を 守る。 台風の 風に 流され 地球の 裏側に いくことも。",
		'zh-tw': "會噴出棉花保護身體。有時會被颱風吹到 地球的另一邊。",
		th: "ปล่อยนุ่นเพื่อป้องกันตัว บางครั้งเมื่อลอยไปตามลมพายุไต้ฝุ่น ก็จะไปถึงอีกฟากของโลกเลย",
		ko: "솜을 날려 몸을 지킨다. 태풍의 바람에 휩쓸려 지구 반대편까지 갈 때도 있다.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "トリプルスピン",
				'zh-tw': "三重旋轉",
				th: "ทริปเปิลสปิน",
				ko: "트리플스핀",
			},
			damage: "10×",
			cost: ["Grass"],
			effect: {
				ja: "コインを3回投げ、オモテの数×10ダメージ。",
				'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
				th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
				ko: "동전을 3번 던져서 앞면이 나온 수 × 10데미지를 준다.",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752749,
				tcgplayer: 568341,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [546],
};

export default card;

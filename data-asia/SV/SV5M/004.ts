import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "コノハナ",
		'zh-tw': "長鼻葉",
		th: "โคโนฮานะ",
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "森の 奥深くに 生息。 頭の 葉っぱで 笛を 作り 不安に させる 音色を 出す。",
		'zh-tw': "棲息在森林深處。會用頭上的葉子做成笛子， 吹出令人感到不安的音色。",
		th: "อาศัยอยู่ในป่าลึก สร้างขลุ่ยด้วยใบไม้บนหัว จะส่งเสียงที่ทำให้รู้สึกกระสับกระส่าย",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "どつく",
				'zh-tw': "推擊",
				th: "ต่อยตี",
			},
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: {
				ja: "れんぞくビンタ",
				'zh-tw': "連出巴掌",
				th: "ตบต่อเนื่อง",
			},
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数×30ダメージ。",
				'zh-tw': "擲3次硬幣，造成正面出現的次數×30點傷害。",
				th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752885,
				tcgplayer: 566155,
			},
		},
	],

	evolveFrom: {
		ja: "タネボー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [274],
};

export default card;

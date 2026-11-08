import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドラン♂",
		'zh-tw': "尼多朗",
		'th-th': "นิโดรัน♂",
		'id-id': "Nidoran♂",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "小柄だが 勇ましい 性質。 仲良しの メスを 守るため 身を ていして 果敢に 戦う。",
		'zh-tw': "體型嬌小，但性情勇猛。為了保護感情好的雌性， 會奮不顧身地勇敢戰鬥。",
		'th-th': "แม้ตัวจะเล็กแต่มีนิสัยกล้าหาญ เพื่อปกป้องตัวเมียที่สนิทสนมด้วยจะเอาตัวเข้าแลกต่อสู้อย่างมุ่งมั่น",
		'id-id': "Nidoran jantan tubuhnya kecil, tapi memiliki sifat pemberani. Demi melindungi betina yang akrab dengannya, Pokémon ini mempertaruhkan nyawanya dan bertarung dengan gagah berani.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "つのでつく",
				'zh-tw': "角撞",
				'th-th': "เขาขวิด",
				'id-id': "Tusukan Tanduk",
			},
			damage: 20,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719474,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837285,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837286,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [32],
};

export default card;

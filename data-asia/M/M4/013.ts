import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "マフォクシー",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		ja: "摂氏３０００度の 炎の 渦を 超能力で 操る。 敵を 渦で 包み 焼きつくす。",
	},

	stage: "Stage2",
	abilities: [{"type": "Ability", "name": { "ja": "フレアマジック" }, "effect": { "ja": "自分の番に、自分の手札から「基本「Fire」エネルギー」を1枚トラッシュするなら、1回使える。自分の手札が7枚になるように、山札を引く。" }}],

	attacks: [
		{ "name": { "ja": "エナジーストーム" }, "damage": "30x", "cost": ["Fire", "Fire"], "effect": { "ja": "おたがいのポケモン全員についているエネルギーの数×30ダメージ。" } }
	],

	
	weaknesses: [{ "type": "Water", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "テールナー",
	},
	rarity: "Rare",
	dexId: [655],
	regulationMark: "I",
};

export default card;

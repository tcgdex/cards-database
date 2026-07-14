import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "古びたずがいの化石",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードは、HP60の[C]タイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。自分の番の中でなら、場に出ているこのカードをトラッシュできる。 Ability: ずがいのトゲ このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。グッズは、自分の番に何枚でも使える。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Common",

	thirdParty: {
		cardmarket: 888343,
	},
};

export default card;

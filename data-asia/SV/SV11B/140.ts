import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ペンドラー",
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		ja: "素早い 動きで 敵を 追い詰め 頭の ツノで 攻撃する。 とどめを 刺すまで 容赦しない。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どくのトゲ" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ベノムショック" },
			damage: "90+",
			cost: ["Darkness", "Colorless"],
			effect: { ja: "相手のバトルポケモンがどくなら、90ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ホイーガ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [545],

	thirdParty: {
		cardmarket: 829386,
		tcgplayer: 636494,
	},
};

export default card;

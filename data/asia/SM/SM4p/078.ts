import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラナッシー",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "アローラは 最高の 環境。 この姿が 本来の ナッシーだと 地元の 人々は 誇らしげだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ナッシーパラダイス" },
			cost: [],
			effect: {
				ja: "自分のベンチの「タマタマ」の数ぶん、自分の山札にある「アローラナッシー」または「アローラナッシーGX」を選び、ベンチの「タマタマ」それぞれにのせて進化させる。そして山札を切る。",
			},
		},
		{
			name: { ja: "たまなげりゅうせいぐん" },
			damage: "80×",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[草]エネルギーの数ぶんコインを投げ、オモテの数x80ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560111,
			},
		},
	],

	evolveFrom: {
		ja: "タマタマ",
	},

	retreat: 3,
	rarity: "None",
	dexId: [103],
};

export default card;

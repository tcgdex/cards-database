import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロス",
		'zh-tw': "巨金怪",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "気温が 氷点下になると 磁力が 強まるので 雪山に 棲む メタグロスは とても 元気。",
		'zh-tw': "當氣溫下降到低於冰點時，磁力就會變強。因此棲息在 雪山裡的巨金怪非常有活力。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "きんきゅうエントリー",
				'zh-tw': "緊急進場",
			},
			effect: {
				ja: "自分の番のはじめに、山札からこのカードを引いたとき、自分のベンチに空きがあるなら、手札に加える前に1回使える。このカードを自分のベンチに出す。その後、自分の山札を3枚引く。",
				'zh-tw': "在自己的回合開始，從牌庫抽出了這張卡時，若自己的備戰區有空位，則在加入手牌前可使用1次。將這張卡放置於自己的備戰區。然後，從自己的牌庫抽出3張卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "コメットパンチ",
				'zh-tw': "彗星拳",
			},
			damage: 100,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンの「コメットパンチ」のダメージは「+100」される。",
				'zh-tw': "在下個自己的回合，這隻寶可夢「彗星拳」的傷害「+100」點。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667950,
				tcgplayer: 570006,
			},
		},
	],

	evolveFrom: {
		ja: "メタング",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [376],
};

export default card;

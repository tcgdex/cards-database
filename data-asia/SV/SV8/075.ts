import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "モモワロウ",
		'zh-tw': "桃歹郎",
		'zh-cn': "桃歹郎"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1025],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "モモ型の 殻は 猛毒の 貯蔵庫。 毒の 餅を 作り 人や ポケモンに ふるまう。",
		'zh-tw': "桃形的殼是劇毒的儲藏庫。 會製作帶毒的麻糬 送給人和寶可夢吃。",
		'zh-cn': "桃形的殼是劇毒的儲藏庫。 會製作帶毒的麻糬 送給人和寶可夢吃。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "もうどくしはい",
			'zh-tw': "劇毒支配",
			'zh-cn': "劇毒支配"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のどくのポケモンは、どくでのせるダメカンの数が5個多くなる。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的【中毒】的寶可夢，因【中毒】而放置的傷害指示物的數量增加5個。",
			'zh-cn': "只要這隻寶可夢在戰鬥場上，對手的【中毒】的寶可夢，因【中毒】而放置的傷害指示物的數量增加5個。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ポイズンチェーン",
			'zh-tw': "猛毒連鎖",
			'zh-cn': "猛毒連鎖"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】。在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
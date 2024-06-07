import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠　萬針魚",
		ja: "ヒスイ ハリーマン"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "身上如同槍尖般的針以及凶暴的性情使這種寶可夢得到了海鬼的外號。 會吞下毒物作為己身糧食。",
		ja: "槍の如き 針と 凶暴なる 気質にて 海鬼の 異名を 持つ ポケモン。 毒を すすりて 己の 糧とす。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劇痛毒",
			ja: "げきつうどく"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為5個。",
			ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は5個になる。"
		}
	}, {
		name: {
			'zh-tw': "針刺刑",
			ja: "ハリつけ"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [904]
}

export default card
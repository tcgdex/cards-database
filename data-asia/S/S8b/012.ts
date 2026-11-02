import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "カジッチュ",
		'zh-tw': "啃果蟲",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "一生 りんごの 中で 暮らし 天敵の 鳥ポケモンに 出会うと りんごの 振りをして 身を守る。",
		'zh-tw': "終其一生都在蘋果裡度過。遇到天敵鳥寶可夢時，會裝成蘋果保護自己。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "からにこもる",
				'zh-tw': "縮入殼中",
			},
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586527,
				tcgplayer: 571265,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578360,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "None",
	dexId: [840],
};

export default card;

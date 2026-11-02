import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "サイホーン",
		'zh-tw': "獨角犀牛",
		th: "ไซฮอร์น",
		id: "Rhyhorn",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "ひとつの ことしか 覚えられない。 突進を はじめると 理由は どうでもよくなり すぐに 忘れる。",
		'zh-tw': "腦子裡只能記住一件事。一旦開始猛衝，不管理由是什麼 都會很快感到無所謂而忘掉。",
		th: "มันจำได้เพียงแค่ครั้งละเรื่อง พอเริ่มพุ่งพรวดพราดเข้าไป มันจะลืมทันทีว่าทำไปทำไม",
		id: "Rhyhorn hanya dapat mengingat satu hal. Begitu mulai menyeruduk, alasan menyeruduk jadi tidak penting baginya dan segera terlupakan.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つきとばす",
				'zh-tw': "推倒",
				th: "ชนกระเด็น",
				id: "Mendorong Kuat",
			},
			damage: 20,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
				'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
				th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
				id: "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]",
			},
		},
		{
			name: {
				ja: "ロックスマッシュ",
				'zh-tw': "岩石粉碎",
				th: "ร็อคสแมช",
				id: "Rock Smash",
			},
			damage: 70,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719564,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837450,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837451,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
	rarity: "Common",
	dexId: [111],
};

export default card;

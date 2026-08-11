import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "イイネイヌ",
		'zh-tw': "夠讚狗",
		th: "อี้เนะอินุ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "すぐ 頭に 血が 上ってしまう 荒くれもの。 首の 鎖を 振り回し なんでも 叩き潰す。",
		'zh-tw': "動不動就會怒火沖天的 粗暴傢伙。會揮甩脖子的鎖鏈 一股腦兒地擊碎東西。",
		th: "จอมอันธพาลที่มีอารมณ์รุนแรงและเลือดขึ้นหน้าได้ง่าย ทุบทำลายทุกสิ่งทุกอย่างด้วยการเหวี่ยงโซ่ที่คอ",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "アドレナパワー",
				'zh-tw': "腎上腺力量",
				th: "อะดรีนาลีนพาวเวอร์",
			},
			effect: {
				ja: "このポケモンに[D]エネルギーがついているなら、このポケモンの最大HPは「＋100」され、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+100」される。",
				'zh-tw': "若這隻寶可夢身上附有【惡】能量卡，則這隻寶可夢的最大HP「+100」，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+100」點。",
				th: "ถ้าโปเกมอนนี้มีพลังงาน[ความมืด]ติดอยู่ HP สูงสุดของโปเกมอนนี้จะถูก [+100] แดเมจของท่าต่อสู้ที่โปเกมอนนี้ ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+100]",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "グッドパンチ",
				'zh-tw': "好拳",
				th: "กู้ดพันช์",
			},
			damage: 70,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767157,
				tcgplayer: 568054,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [1014],
};

export default card;

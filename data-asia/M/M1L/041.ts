import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "クスネ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "用心深く ずる賢い。  エサを 盗むと しっぽで  足跡を 消しながら 逃げるのだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "やみのキバ"}, "damage": 20, "cost": ["Darkness"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [827],

	thirdParty: {
		cardmarket: 840336,
		tcgplayer: 647150,
	},
};

export default card;
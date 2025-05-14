import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		es: "Slowbro",
		it: "Slowbro",
		de: "Lahmus",
		'pt-br': "Slowbro",
		ko: "야도란"
	},

	illustrator: "Kogemaru Himeno",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Slowpoke"
	},


	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			es: "Superrayo Psi",
			it: "Superpsico",
			de: "Super-Psischlag",
			'pt-br': "Super-raio Psíquico",
			ko: "초염동력"
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		en: "When a Slowpoke went hunting in the sea, its tail was bitten by a Shellder. That made it evolve into Slowbro.",
		fr: "Un jour, alors qu'un Ramoloss pêchait, un Kokiyas\ns'est accroché à sa queue et l'a fait évoluer en Flagadoss.",
		es: "Según parece, cuando Slowpoke fue\na pescar al mar, un Shellder le mordió\nla cola y así evolucionó a Slowbro.",
		it: "Uno Slowpoke che si trovava in\nmare in cerca di cibo fu morso da\nuno Shellder, evolvendosi in Slowbro.",
		de: "Als Flegmon im Meer jagen ging,\nbiss ein Muschas in seine Rute.\nDadurch entwickelte es sich zu Lahmus.",
		'pt-br': "Quando um Slowpoke foi caçar no mar, sua cauda\nfoi mordida por um Shellder. Isso fez com que evoluísse\npara um Slowbro.",
		ko: "야돈이 바다로 먹이를\n잡으러 갔다가 셀러에게\n꼬리를 물려 야도란이 되었다."
	}
}

export default card

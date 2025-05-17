import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		it: "Exeggcute",
		de: "Owei",
		'pt-br': "Exeggcute",
		ko: "아라리"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Though it may look like it's just a bunch of eggs, it's a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.",
		fr: "Même s'il ressemble à un tas d'œufs,\nil s'agit bien d'un Pokémon. Il paraît qu'ils\ncommuniquent entre eux par télépathie.",
		es: "Pese a su aspecto de mera piña de huevos,\nse trata de un Pokémon. Al parecer, sus\ncabezas se comunican entre sí por telepatía.",
		it: "Somiglia a un mucchio di uova, ma è\nun Pokémon a tutti gli effetti. Pare che\ncomunichi con i suoi simili telepaticamente.",
		de: "Owei mag zwar Eiern ähneln, ist aber ein echtes\nPokémon, das aus sechs Individuen besteht, die\nwohl telepathisch miteinander kommunizieren.",
		'pt-br': "Apesar de parecer só um monte de ovos, é um Pokémon\nde verdade. Exeggcute se comunica com outros de sua\nespécie por meio de telepatia.",
		ko: "알처럼 보이지만 엄연한\n포켓몬이다. 텔레파시로\n동료와 교신하는 듯하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			de: "Rolltackle",
			'pt-br': "Golpe de Colisão Rolante",
			ko: "구르기 태클"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card
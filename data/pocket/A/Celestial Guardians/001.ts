import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'de-de': "Owei",
		'pt-br': "Exeggcute",
		'ko-kr': "아라리"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [102],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "Though it may look like it's just a bunch of eggs, it's a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.",
		'fr-fr': "Même s'il ressemble à un tas d'œufs,\nil s'agit bien d'un Pokémon. Il paraît qu'ils\ncommuniquent entre eux par télépathie.",
		'es-es': "Pese a su aspecto de mera piña de huevos,\nse trata de un Pokémon. Al parecer, sus\ncabezas se comunican entre sí por telepatía.",
		'it-it': "Somiglia a un mucchio di uova, ma è\nun Pokémon a tutti gli effetti. Pare che\ncomunichi con i suoi simili telepaticamente.",
		'de-de': "Owei mag zwar Eiern ähneln, ist aber ein echtes\nPokémon, das aus sechs Individuen besteht, die\nwohl telepathisch miteinander kommunizieren.",
		'pt-br': "Apesar de parecer só um monte de ovos, é um Pokémon\nde verdade. Exeggcute se comunica com outros de sua\nespécie por meio de telepatia.",
		'ko-kr': "알처럼 보이지만 엄연한\n포켓몬이다. 텔레파시로\n동료와 교신하는 듯하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'de-de': "Rolltackle",
			'pt-br': "Golpe de Colisão Rolante",
			'ko-kr': "구르기 태클"
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
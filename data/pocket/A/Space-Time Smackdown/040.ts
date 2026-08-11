import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shellos",
		'fr-fr': "Sancoki",
		'es-es': "Shellos",
		'it-it': "Shellos",
		'de-de': "Schalellos",
		'pt-br': "Shellos",
		'ko-kr': "깝질무"
	},

	illustrator: "Teeziro",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [422],
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "It used to have a shell on its back long ago. This species is closely related to Pokémon like Shellder.",
		'fr-fr': "Il avait autrefois une coquille sur le dos. C'est un proche parent\nde Kokiyas et d'autres espèces de Pokémon similaires.",
		'es-es': "Antiguamente cargaba con un caparazón al lomo.\nEs un Pokémon estrechamente emparentado\ncon los Shellder y otras especies similares.",
		'it-it': "In passato aveva una conchiglia sul dorso.\nLa sua specie è strettamente imparentata\ncon quella di Shellder e altri Pokémon simili.",
		'de-de': "Vor langer Zeit hatte es eine Muschelschale\nauf dem Rücken. Diese Art ist eng verwandt\nmit Pokémon wie Muschas.",
		'pt-br': "Antigamente, tinha uma concha em suas costas.\nEsta espécie está fortemente relacionada a\nPokémon como Shellder.",
		'ko-kr': "옛날에는 등에\n조개껍질을 지고 있었다.\n셀러 등과 가까운 종류의 포켓몬."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'de-de': "Lehmschelle",
			'pt-br': "Tapa de Lama",
			'ko-kr': "진흙뿌리기"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["palkia"]
}

export default card

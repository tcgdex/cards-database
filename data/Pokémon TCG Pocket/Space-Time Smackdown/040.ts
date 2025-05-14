import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Shellos",
		fr: "Sancoki",
		es: "Shellos",
		it: "Shellos",
		de: "Schalellos",
		'pt-br': "Shellos",
		ko: "깝질무"
	},

	illustrator: "Teeziro",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "It used to have a shell on its back long ago. This species is closely related to Pokémon like Shellder.",
		fr: "Il avait autrefois une coquille sur le dos. C'est un proche parent\nde Kokiyas et d'autres espèces de Pokémon similaires.",
		es: "Antiguamente cargaba con un caparazón al lomo.\nEs un Pokémon estrechamente emparentado\ncon los Shellder y otras especies similares.",
		it: "In passato aveva una conchiglia sul dorso.\nLa sua specie è strettamente imparentata\ncon quella di Shellder e altri Pokémon simili.",
		de: "Vor langer Zeit hatte es eine Muschelschale\nauf dem Rücken. Diese Art ist eng verwandt\nmit Pokémon wie Muschas.",
		'pt-br': "Antigamente, tinha uma concha em suas costas.\nEsta espécie está fortemente relacionada a\nPokémon como Shellder.",
		ko: "옛날에는 등에\n조개껍질을 지고 있었다.\n셀러 등과 가까운 종류의 포켓몬."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			de: "Lehmschelle",
			'pt-br': "Tapa de Lama",
			ko: "진흙뿌리기"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		es: "Mimikyu",
		it: "Mimikyu",
		de: "Mimigma",
		'pt-br': "Mimikyu",
		ko: "따라큐"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [778],
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "There was a scientist who peeked under Mimikyu's old rag in the name of research. The scientist died of a mysterious disease.",
		fr: "Les malheureux chercheurs qui ont regardé\nsous son déguisement en lambeaux ont\nsuccombé à une mystérieuse maladie.",
		es: "Un investigador que miró dentro del saco para estudiar a este\nPokémon perdió la vida a causa de una misteriosa enfermedad.",
		it: "Uno scienziato che studiava questo Pokémon morì di una\nmisteriosa malattia dopo aver guardato sotto il suo panno.",
		de: "Alle Wissenschaftler, die zu Forschungszwecken\neinen Blick unter seinen Lumpen gewagt haben,\nsind an einer rätselhaften Krankheit gestorben.",
		'pt-br': "Um cientista olhou por debaixo do pano velho\nde Mimikyu em nome da ciência. O cientista morreu\nde uma doença misteriosa.",
		ko: "연구를 위해 누더기 속을\n들여다본 학자가 알 수 없는\n병으로 목숨을 잃었다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Shadow Hit",
			fr: "Frappe Ombre",
			es: "Impacto Umbrío",
			it: "Botta Spettrale",
			de: "Schattenschlag",
			'pt-br': "Batida Sombria",
			ko: "섀도히트"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "This attack also does 20 damage to 1 of your Pokémon.",
			fr: "Cette attaque inflige aussi 20 dégâts à un de vos Pokémon.",
			es: "Este ataque también hace 20 puntos de daño a 1 de tus Pokémon.",
			it: "Questo attacco infligge anche 20 danni a uno dei tuoi Pokémon.",
			de: "Diese Attacke fügt auch 1 deiner Pokémon 20 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos seus Pokémon.",
			ko: "자신의 포켓몬 1마리에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card
import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Decidueye ex",
		'fr-fr': "Archéduc-ex",
		'es-es': "Decidueye ex",
		'it-it': "Decidueye-ex",
		'de-de': "Silvarro-ex",
		'pt-br': "Decidueye ex",
		'ko-kr': "모크나이퍼 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [724],
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Dartrix"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Pierce the Pain",
			'fr-fr': "Acharnement Perçant",
			'es-es': "Hurgaheridas",
			'it-it': "Freccia Spietata",
			'de-de': "Wundschuss",
			'pt-br': "Perfurar a Ferida",
			'ko-kr': "상처노려쏘기"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 100 damage to 1 of your opponent's Pokémon that have damage on them.",
			'fr-fr': "Cette attaque inflige 100 dégâts à un des Pokémon de votre adversaire ayant subi des dégâts.",
			'es-es': "Este ataque hace 100 puntos de daño a 1 de los Pokémon de tu rival que ya tenga daño.",
			'it-it': "Questo attacco infligge 100 danni a un Pokémon danneggiato dell'avversario.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners, dem bereits Schaden zugefügt wurde, 100 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 100 pontos de dano a 1 dos Pokémon do seu oponente que estiver danificado.",
			'ko-kr': "데미지를 받고 있는 상대의 포켓몬 1마리에게 100데미지를 준다."
		}
	}, {
		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'de-de': "Rasierblatt",
			'pt-br': "Folha Navalha",
			'ko-kr': "잎날가르기"
		},

		damage: 80,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Decidueye ex",
		fr: "Archéduc-ex",
		es: "Decidueye ex",
		it: "Decidueye-ex",
		de: "Silvarro-ex",
		'pt-br': "Decidueye ex",
		ko: "모크나이퍼 ex"
	},

	illustrator: "Takumi Wada",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		en: "Dartrix"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Pierce the Pain",
			fr: "Acharnement Perçant",
			es: "Hurgaheridas",
			it: "Freccia Spietata",
			de: "Wundschuss",
			'pt-br': "Perfurar a Ferida",
			ko: "상처노려쏘기"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This attack does 100 damage to 1 of your opponent's Pokémon that have damage on them.",
			fr: "Cette attaque inflige 100 dégâts à un des Pokémon de votre adversaire ayant subi des dégâts.",
			es: "Este ataque hace 100 puntos de daño a 1 de los Pokémon de tu rival que ya tenga daño.",
			it: "Questo attacco infligge 100 danni a un Pokémon danneggiato dell'avversario.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners, dem bereits Schaden zugefügt wurde, 100 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 100 pontos de dano a 1 dos Pokémon do seu oponente que estiver danificado.",
			ko: "데미지를 받고 있는 상대의 포켓몬 1마리에게 100데미지를 준다."
		}
	}, {
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
			es: "Hoja Afilada",
			it: "Foglielama",
			de: "Rasierblatt",
			'pt-br': "Folha Navalha",
			ko: "잎날가르기"
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
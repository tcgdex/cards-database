import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Rayquaza ex",
		fr: "Rayquaza-ex",
		es: "Rayquaza ex",
		it: "Rayquaza-ex",
		de: "Rayquaza-ex",
		'pt-br': "Rayquaza ex",
		ko: "레쿠쟈 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [384],
	hp: 140,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Draco Meteor",
			fr: "Draco-Météore",
			es: "Cometa Draco",
			it: "Dragobolide",
			de: "Draco Meteor",
			'pt-br': "Meteoro do Dragão",
			ko: "용성군"
		},

		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "1 of your opponent's Pokémon is chosen at random 4 times. For each time a Pokémon was chosen, do 40 damage to it.",
			fr: "Un des Pokémon de votre adversaire est choisi au hasard 4 fois. Pour chaque fois où un Pokémon est choisi, il subit 40 dégâts.",
			es: "Se elige 4 veces a un Pokémon aleatorio de tu rival. Haz a cada uno 40 puntos de daño por cada vez que haya resultado elegido.",
			it: "Per 4 volte, un Pokémon avversario viene scelto a caso. Ogni volta che un Pokémon viene scelto in questo modo, subisce 40 danni.",
			de: "4 Mal wird zufällig 1 Pokémon des Gegners ausgewählt. Füge jedes Mal, wenn ein Pokémon ausgewählt wird, diesem Pokémon 40 Schadenspunkte zu.",
			'pt-br': "4 vezes, um Pokémon do oponente é escolhido aleatoriamente. Para cada vez que um Pokémon for escolhido, cause 40 pontos de dano a ele.",
			ko: "상대의 포켓몬이 랜덤으로 4번 선택되어 선택된 포켓몬 전원에게 선택된 횟수 × 40데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: []
}

export default card
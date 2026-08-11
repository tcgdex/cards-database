import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rayquaza ex",
		'fr-fr': "Rayquaza-ex",
		'es-es': "Rayquaza ex",
		'it-it': "Rayquaza-ex",
		'de-de': "Rayquaza-ex",
		'pt-br': "Rayquaza ex",
		'ko-kr': "레쿠쟈 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [384],
	hp: 140,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Draco Meteor",
			'fr-fr': "Draco-Météore",
			'es-es': "Cometa Draco",
			'it-it': "Dragobolide",
			'de-de': "Draco Meteor",
			'pt-br': "Meteoro do Dragão",
			'ko-kr': "용성군"
		},

		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "1 of your opponent's Pokémon is chosen at random 4 times. For each time a Pokémon was chosen, do 40 damage to it.",
			'fr-fr': "Un des Pokémon de votre adversaire est choisi au hasard 4 fois. Pour chaque fois où un Pokémon est choisi, il subit 40 dégâts.",
			'es-es': "Se elige 4 veces a un Pokémon aleatorio de tu rival. Haz a cada uno 40 puntos de daño por cada vez que haya resultado elegido.",
			'it-it': "Per 4 volte, un Pokémon avversario viene scelto a caso. Ogni volta che un Pokémon viene scelto in questo modo, subisce 40 danni.",
			'de-de': "4 Mal wird zufällig 1 Pokémon des Gegners ausgewählt. Füge jedes Mal, wenn ein Pokémon ausgewählt wird, diesem Pokémon 40 Schadenspunkte zu.",
			'pt-br': "4 vezes, um Pokémon do oponente é escolhido aleatoriamente. Para cada vez que um Pokémon for escolhido, cause 40 pontos de dano a ele.",
			'ko-kr': "상대의 포켓몬이 랜덤으로 4번 선택되어 선택된 포켓몬 전원에게 선택된 횟수 × 40데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol7"]
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Wugtrio ex",
		fr: "Triopikeau-ex",
		es: "Wugtrio ex",
		it: "Wugtrio-ex",
		de: "Schligdri-ex",
		'pt-br': "Wugtrio ex",
		ko: "바닥트리오 ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Wiglett"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Pop Out Throughout",
			fr: "Tape en Trois Temps",
			es: "Vapuleo por Sorteo",
			it: "Attacco alla Cieca",
			de: "Wuselausbruch",
			'pt-br': "Pipocar por Aí",
			ko: "여기저기분출"
		},

		cost: ["Water", "Water", "Water"],

		effect: {
			en: "1 of your opponent's Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, do 50 damage to it.",
			fr: "Un des Pokémon de votre adversaire est choisi au hasard 3 fois. Pour chaque fois où un Pokémon est choisi, il subit 50 dégâts.",
			es: "Se elige 3 veces a un Pokémon aleatorio de tu rival. Haz a cada uno 50 puntos de daño por cada vez que haya resultado elegido.",
			it: "Per 3 volte, un Pokémon avversario viene scelto a caso. Ogni volta che un Pokémon viene scelto in questo modo, subisce 50 danni.",
			de: "3 Mal wird zufällig 1 Pokémon des Gegners ausgewählt. Füge jedes Mal, wenn ein Pokémon ausgewählt wird, diesem Pokémon 50 Schadenspunkte zu.",
			'pt-br': "3 vezes, um Pokémon do oponente é escolhido aleatoriamente. Para cada vez que um Pokémon for escolhido, cause 50 pontos de dano a ele.",
			ko: "상대의 포켓몬이 랜덤으로 3번 선택되어 선택된 포켓몬 전원에게 선택된 횟수 × 50데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		es: "Dragonite",
		it: "Dragonite",
		de: "Dragoran",
		'pt-br': "Dragonite",
		ko: "망나뇽"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Stage2",
	evolveFrom: {
		en: "Dragonair"
	},

	attacks: [{
		cost: ["Water", "Lightning", "Colorless", "Colorless"],

		name: {
			en: "Draco Meteor",
			fr: "Draco-Météore",
			es: "Cometa Draco",
			it: "Dragobolide",
			de: "Draco Meteor",
			'pt-br': "Meteoro do Dragão",
			ko: "용성군"
		},

		effect: {
			en: "1 of your opponent's Pokémon is chosen at random 4 times. For each time a Pokémon was chosen, do 50 damage to it.",
			fr: "Un des Pokémon de votre adversaire est choisi au hasard 4 fois. Pour chaque fois où un Pokémon est choisi, il subit 50 dégâts.",
			es: "Se elige 4 veces a un Pokémon aleatorio de tu rival. Haz a cada uno 50 puntos de daño por cada vez que haya resultado elegido.",
			it: "Per 4 volte, un Pokémon avversario viene scelto a caso. Ogni volta che un Pokémon viene scelto in questo modo, subisce 50 danni.",
			de: "4 Mal wird zufällig 1 Pokémon des Gegners ausgewählt. Füge jedes Mal, wenn ein Pokémon ausgewählt wird, diesem Pokémon 50 Schadenspunkte zu.",
			'pt-br': "4 vezes, um Pokémon do oponente é escolhido aleatoriamente. Para cada vez que um Pokémon for escolhido, cause 50 pontos de dano a ele.",
			ko: "상대의 포켓몬이 랜덤으로 4번 선택되어 선택된 포켓몬 전원에게 선택된 횟수 × 50데미지를 준다."
		}
	}],

	retreat: 3,
	rarity: "One Star",

	description: {
		en: "It is said that somewhere in the ocean lies an island where these gather. Only they live there.",
		fr: "On dit qu'il existe une île quelque part dans l'océan où\nces Pokémon se réunissent pour vivre paisiblement.",
		es: "Dicen que viven en una isla en algún\nlugar del océano que solo ellos habitan.",
		it: "Si dice che questi Pokémon si riuniscano su\nun'isola in mezzo all'oceano dove vivono solo loro.",
		de: "Man sagt, dass es irgendwo im Meer\neine Insel gibt, auf der sie sich\nversammeln. Nur sie leben dort.",
		'pt-br': "Acredita-se que em algum lugar no oceano\né possível encontrar uma ilha onde estes\nPokémon se reúnem. Só eles moram lá.",
		ko: "드넓은 바다 어딘가에는\n망나뇽만이 모여 사는\n섬이 있다고 한다."
	}
}

export default card

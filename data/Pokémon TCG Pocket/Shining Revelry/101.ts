import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Wiglett",
		fr: "Taupikeau",
		es: "Wiglett",
		it: "Wiglett",
		de: "Schligda",
		'pt-br': "Wiglett",
		ko: "바다그다"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "This Pokémon can pick up the scent of a Veluza just over 65 feet away and will hide itself in the sand.",
		fr: "Il détecte l'odeur de Délestin à plus de vingt mètres,\nce qui lui donne le temps de s'enfouir dans le sable.",
		es: "Puede percibir el olor de los Veluza a 20 m de distancia,\nlo que le permite ocultarse bajo la arena a tiempo.",
		it: "Fiuta l'odore di un Veluza da 20 metri\ndi distanza e si nasconde nella sabbia.",
		de: "Es kann den Geruch eines Agiluza auf 20 m Entfernung\nwahrnehmen und versteckt sich daraufhin flugs im Sand.",
		'pt-br': "Este Pokémon é capaz de sentir o cheiro de Veluza\na mais de 20 metros de distância e se esconderá na areia.",
		ko: "20m 떨어진 가비루사에게서 나는\n냄새도 맡을 수 있어서\n모래 속에 몸을 숨긴다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spring Out",
			fr: "Surgir",
			es: "Saltar en Resorte",
			it: "Salta Fuori",
			de: "Rausspringen",
			'pt-br': "Surgir",
			ko: "튀어나오기"
		},

		cost: ["Water"],

		effect: {
			en: "1 of your opponent's Pokémon is chosen at random. Do 30 damage to it.",
			fr: "Un des Pokémon de votre adversaire est choisi au hasard. Il subit 30 dégâts.",
			es: "Se elige a un Pokémon aleatorio de tu rival. Hazle 30 puntos de daño.",
			it: "Viene scelto un Pokémon avversario a caso. Quel Pokémon subisce 30 danni.",
			de: "1 Pokémon des Gegners wird zufällig ausgewählt.\nFüge diesem Pokémon 30 Schadenspunkte zu.",
			'pt-br': "Um dos Pokémon do seu oponente é escolhido aleatoriamente. Cause 30 pontos de dano a ele.",
			ko: "상대의 포켓몬이 랜덤으로 1번 선택되어 선택된 포켓몬에게 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card
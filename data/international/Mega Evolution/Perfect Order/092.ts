import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [699],

	name: {
		'en-us': "Aurorus",
		'fr-fr': "Dragmara",
		'es-es': "Aurorus",
		'es-mx': "Aurorus",
		'de-de': "Amagarga",
		'it-it': "Aurorus",
		'pt-br': "Aurorus"
	},

	evolveFrom: {
		'en-us': "Amaura",
		'fr-fr': "Amagara",
		'es-es': "Amaura",
		'es-mx': "Amaura",
		'de-de': "Amarino",
		'it-it': "Amaura",
		'pt-br': "Amaura",
	},

	illustrator: "Masa",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Tundra Wall",
			'fr-fr': "Mur Toundra",
			'es-es': "Muro Tundra",
			'es-mx': "Muro Tundral",
			'de-de': "Tundra-Wall",
			'it-it': "Murotundra",
			'pt-br': "Parede de Tundra"
		},

		effect: {
			'en-us': "All of your Pokémon that have any {W} Energy attached take 50 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). The effect of Tundra Wall doesn't stack.",
			'fr-fr': "Vos Pokémon auxquels au moins une Énergie {W} est attachée subissent 50 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance). L'effet de Mur Toundra n'est pas cumulable.",
			'es-es': "Los ataques de los Pokémon de tu rival hacen 50 puntos de daño menos a todos tus Pokémon que tengan alguna Energía {W} unida (después de aplicar Debilidad y Resistencia). El efecto de Muro Tundra no se acumula.",
			'es-mx': "Todos tus Pokémon que tengan alguna Energía {W} unida reciben 50 puntos de daño menos de los ataques de los Pokémon de tu rival (después de aplicar Debilidad y Resistencia). El efecto de Muro Tundral no se acumula.",
			'de-de': "Allen deinen Pokémon, an die mindestens 1 {W}-Energie angelegt ist, werden durch Attacken von Pokémon deines Gegners 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Der Effekt von Tundra-Wall stapelt sich nicht.",
			'it-it': "I tuoi Pokémon che hanno delle Energie {W} assegnate subiscono 50 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza. L'effetto di Murotundra non è cumulabile.",
			'pt-br': "Todos os seus Pokémon que têm alguma Energia {W} ligada a eles recebem 50 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência). O efeito de Parede de Tundra não acumula."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Freezing Chill",
			'fr-fr': "Frisson Glaçant",
			'es-es': "Frío Helador",
			'es-mx': "Frío Gélido",
			'de-de': "Gefrierschock",
			'it-it': "Freddo Glaciale",
			'pt-br': "Frio de Arrepiar"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't use attacks.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas utiliser d'attaques.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
			'de-de': "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può usare attacchi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá usar ataques."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684357,
				cardmarket: 877509
			}
		}
	],

}

export default card

import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "It is formed by two Beldum joining together. Its steel body won't be scratched if it collides with a jet.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886452,
				tcgplayer: 693523
			}
		},
	],

	name: {
		en: "Metang",
		fr: "Métang",
		es: "Metang",
		'es-mx': "Metang",
		de: "Metang",
		it: "Metang",
		pt: "Metang"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Common",
	category: "Pokemon",
	dexId: [375],
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Beldum"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			es: "Garra Metal",
			'es-mx': "Garra de Metal",
			de: "Metallklaue",
			it: "Ferrartigli",
			pt: "Garra de Metal"
		},

		cost: ["Metal"],
		damage: 30
	}, {
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
			es: "Presión de Guardia",
			'es-mx': "Prensa Guardiana",
			de: "Schutzdruck",
			it: "Pressadifesa",
			pt: "Aperto Protetor"
		},

		cost: ["Metal", "Metal", "Colorless"],
		damage: 70,

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 30 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Onix",
		fr: "Onix",
		de: "Onix",
		es: "Onix",
		it: "Onix",
		pt: "Onix",
		'es-mx': "Onix"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
			de: "Schutzdruck",
			es: "Presión de Guardia",
			it: "Pressadifesa",
			pt: "Aperto Protetor",
			'es-mx': "Prensa Guardiana"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks <em>(after applying Weakness and Resistance)</em>.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques <em>(après application de la Faiblesse et de la Résistance)</em>.",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt <em>(nachdem Schwäche und Resistenz verrechnet wurden)</em>.",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon <em>(después de aplicar Debilidad y Resistencia)</em>.",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, <em>dopo aver applicato debolezza e resistenza</em>.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques <em>(depois de aplicar Fraqueza e Resistência)</em>.",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 30 puntos de daño menos de ataques <em>(después de aplicar Debilidad y Resistencia)</em>."
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 728028,
				cardmarket: 918873
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 728028,
				cardmarket: 918873
			}
		}
	],
}

export default card
import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "The absorption of starlight fuels this Pokémon's growth. The shell that encases it is harder than any known material."
	},

	name: {
		en: "Cosmoem",
		fr: "Cosmovum",
		de: "Cosmovum",
		es: "Cosmoem",
		it: "Cosmoem",
		'es-mx': "Cosmoem"
	},

	illustrator: "Masako Tomii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [790],
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Stiffen",
			fr: "Raidissement",
			de: "Verhärten",
			es: "Endurecimiento",
			it: "Indurimento",
			'es-mx': "Fortalecimiento"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 60 less damage from attacks <em>(after applying Weakness and Resistance)</em>.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 60 dégâts de moins provenant des attaques <em>(après application de la Faiblesse et de la Résistance)</em>.",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 60 Schadenspunkte weniger zugefügt <em>(nachdem Schwäche und Resistenz verrechnet wurden)</em>.",
			es: "Durante el próximo turno de tu rival, los ataques hacen 60 puntos de daño menos a este Pokémon <em>(después de aplicar Debilidad y Resistencia)</em>.",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 60 danni in meno dagli attacchi, <em>dopo aver applicato debolezza e resistenza</em>.",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 60 puntos de daño menos de ataques <em>(después de aplicar Debilidad y Resistencia)</em>."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907686,
				tcgplayer: 716475
			}
		}
	],
}

export default card

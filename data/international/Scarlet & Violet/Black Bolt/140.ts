import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [600],
	set: Set,

	name: {
		'en-us': "Klang",
		'fr-fr': "Clic",
		'de-de': "Kliklak",
		'it-it': "Klang",
		'pt-br': "Klang",
		'es-es': "Klang",
		'es-mx': "Klang"
	},

	illustrator: "okawamatakatoshi",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Klink",
		'fr-fr': "Tic",
		'de-de': "Klikk",
		'it-it': "Klink",
		'pt-br': "Klink",
		'es-es': "Klink",
		'es-mx': "Klink"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Hard Gears",
			'fr-fr': "Engrenages Robustes",
			'de-de': "Robustes Getriebe",
			'it-it': "Ingranaggi Resistenti",
			'pt-br': "Engrenagens Sólidas",
			'es-es': "Engranajes Resistentes",
			'es-mx': "Engranajes Resistentes"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836206,
				tcgplayer: 642262
			}
		},
	]
}

export default card

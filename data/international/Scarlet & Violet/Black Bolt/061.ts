import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [599],
	set: Set,

	name: {
		'en-us': "Klink",
		'fr-fr': "Tic",
		'de-de': "Klikk",
		'it-it': "Klink",
		'pt-br': "Klink",
		'es-es': "Klink",
		'es-mx': "Klink"
	},

	illustrator: "Amelicart",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

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
			'en-us': "During your opponent's next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 10 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 10 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836035,
				tcgplayer: 642180
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836035,
				tcgplayer: 642180
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836431,
				tcgplayer: 642421
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836432,
				tcgplayer: 642349
			}
		}
	]
}

export default card

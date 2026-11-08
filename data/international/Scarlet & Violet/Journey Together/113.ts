import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [372],
	set: Set,

	name: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
		'es-es': "Shelgon",
		'de-de': "Draschel",
		'it-it': "Shelgon",
		'pt-br': "Shelgon",
		'es-mx': "Shelgon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'es-es': "Bagon",
		'de-de': "Kindwurm",
		'it-it': "Bagon",
		'pt-br': "Bagon",
		'es-mx': "Bagon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Guard Press",
			'fr-fr': "Pression de Garde",
			'es-es': "Presión de Guardia",
			'de-de': "Schutzdruck",
			'it-it': "Pressadifesa",
			'pt-br': "Aperto Protetor",
			'es-mx': "Prensa Guardiana"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		},

		damage: 30
	}, {
		cost: ["Fire", "Water", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'de-de': "Schwerer Einschlag",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'es-mx': "Impacto Pesado"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "I",
	illustrator: "Julie Hang",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817265,
				tcgplayer: 623540
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817265,
				tcgplayer: 623540
			}
		},
	],
}

export default card

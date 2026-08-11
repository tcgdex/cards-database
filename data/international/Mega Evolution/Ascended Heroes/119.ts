import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Carkol",
		'fr-fr': "Wagomine",
		'es-es': "Carkol",
		'es-mx': "Carkol",
		'de-de': "Wagong",
		'it-it': "Carkol",
		'pt-br': "Carkol"
	},

	evolveFrom: {
		'en-us': "Rolycoly",
		'fr-fr': "Charbi",
		'es-es': "Rolycoly",
		'es-mx': "Rolycoly",
		'de-de': "Klonkett",
		'it-it': "Rolycoly",
		'pt-br': "Rolycoly",
	},

	illustrator: "Apios",
	rarity: "Common",
	category: "Pokemon",
	dexId: [838],
	hp: 110,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Guard Press",
			'fr-fr': "Pression de Garde",
			'es-es': "Presión de Guardia",
			'es-mx': "Prensa Guardiana",
			'de-de': "Schutzdruck",
			'it-it': "Pressadifesa",
			'pt-br': "Aperto Protetor"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 20 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Power Gem",
			'fr-fr': "Rayon Gemme",
			'es-es': "Joya de Luz",
			'es-mx': "Joya de Luz",
			'de-de': "Juwelenkraft",
			'it-it': "Gemmoforza",
			'pt-br': "Gema Poderosa"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "Due to the coal tar created inside it, the heap of coal on Carkol’s back never falls apart, even when the Pokémon rolls around at high speeds.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869730,
			tcgplayer: 675931
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870324,
			tcgplayer: 676946
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870323,
			tcgplayer: 677086
		}
	},
],
}

export default card

import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [95],
	set: Set,

	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'es-es': "Onix",
		'it-it': "Onix",
		'pt-br': "Onix",
		'de-de': "Onix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "KEIICHIRO ITO",

	description: {
		'en-us': "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Guard Press",
			'fr-fr': "Pression de Garde",
			'de-de': "Schutzdruck",
			'es-es': "Presión de Guardia",
			'pt-br': "Aperto Protetor",
			'it-it': "Pressadifesa"
		},

		damage: 30,

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Rock Throw",
			'fr-fr': "Jet-Pierres",
			'de-de': "Steinwurf",
			'es-es': "Lanzarrocas",
			'pt-br': "Lançamento de Rocha",
			'it-it': "Sassata"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582746,
				tcgplayer: 253343
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582746,
				tcgplayer: 253343
			}
		},
	],
}

export default card

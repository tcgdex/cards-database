import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [889],

	name: {
		'en-us': "Zamazenta",
		'fr-fr': "Zamazenta",
		'es-es': "Zamazenta",
		'it-it': "Zamazenta",
		'pt-br': "Zamazenta",
		'de-de': "Zamazenta"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Guard Press",
				'fr-fr': "Pression de Garde",
				'es-es': "Presión de Guardia",
				'it-it': "Pressadifesa",
				'pt-br': "Aperto Protetor",
				'de-de': "Schutzdruck"
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Power Rush",
				'fr-fr': "Ruée Puissante",
				'es-es': "Envite Poderoso",
				'it-it': "Assalto Potente",
				'pt-br': "Arremetida Poderosa",
				'de-de': "Power-Ansturm"
			},
			effect: {
				'en-us': "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Lancia una moneta. Se esce croce, questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este Pokémon não poderá atacar durante o seu próximo turno.",
				'de-de': "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Metal"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its ability to deflect any attack led to it being known as the Fighting Master's Shield. It was feared and respected by all."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 453303,
				tcgplayer: 213240
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 453303,
				tcgplayer: 213240
			}
		},
	],
}

export default card

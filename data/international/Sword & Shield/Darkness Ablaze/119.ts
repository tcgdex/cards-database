import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Scizor VMAX",
		'fr-fr': "Cizayox VMAX",
		'es-es': "Scizor VMAX",
		'it-it': "Scizor VMAX",
		'pt-br': "Scizor VMAX",
		'de-de': "Scherox VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	dexId: [212],
	set: Set,
	hp: 320,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Scizor V",
		'fr-fr': "Cizayox-V",
		'es-es': "Scizor V",
		'it-it': "Scizor-V",
		'pt-br': "Scizor V",
		'de-de': "Scherox-V"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Hard Scissors",
				'fr-fr': "Cisailles",
				'es-es': "Tijeras Resistentes",
				'it-it': "Forbici Dure",
				'pt-br': "Tesouras Resistentes",
				'de-de': "Harte Scheren"
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 90,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Max Steelspike",
				'fr-fr': "Métallomax",
				'es-es': "Maximetal",
				'it-it': "Dynametallo",
				'pt-br': "Espinho de Aço Max",
				'de-de': "Dyna-Stahlzacken"
			},

			damage: 190,

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
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483474,
				tcgplayer: 219374
			}
		},
	],
}

export default card

import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [503],

	name: {
		'en-us': "Samurott",
		'fr-fr': "Clamiral",
		'es-es': "Samurott",
		'it-it': "Samurott",
		'pt-br': "Samurott",
		'de-de': "Admurai"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre",
		'es-es': "Dewott",
		'it-it': "Dewott",
		'pt-br': "Dewott",
		'de-de': "Zwottronin"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shell Armor",
				'fr-fr': "Coque Armure",
				'es-es': "Hojas Envolventes",
				'it-it': "Fogliefascia",
				'pt-br': "Enfaixar com Folhas",
				'de-de': "Blätterwickel"
			},
			effect: {
				'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Wash",
				'fr-fr': "Aqua-Lavage",
				'es-es': "Limpieza Acuática",
				'it-it': "Idrolavaggio",
				'pt-br': "Limpeza Aquática",
				'de-de': "Aquawäsche"
			},
			effect: {
				'en-us': "You may put 2 Energy attached to your opponent's Active Pokémon into their hand.",
				'fr-fr': "Vous pouvez ajouter à la main de votre adversaire 2 Énergies attachées à son Pokémon Actif.",
				'es-es': "Puedes poner 2 Energías unidas al Pokémon Activo de tu rival en su mano.",
				'it-it': "Puoi prendere due Energie assegnate al Pokémon attivo del tuo avversario e aggiungerle alle carte che ha in mano.",
				'pt-br': "Você pode colocar 2 Energias ligadas ao Pokémon Ativo do seu oponente na mão dele(a).",
				'de-de': "Du kannst deinem Gegner 2 an sein Aktives Pokémon angelegte Energien auf seine Hand geben."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "One swing of the sword incorporated in its armor can fell an opponent. A simple glare from one of them quiets everybody."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511595,
				tcgplayer: 226415
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511595,
				tcgplayer: 226415
			}
		},
	],
}

export default card

import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [502],

	name: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre",
		'es-es': "Dewott",
		'it-it': "Dewott",
		'pt-br': "Dewott",
		'de-de': "Zwottronin"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
		'es-es': "Oshawott",
		'it-it': "Oshawott",
		'pt-br': "Oshawott",
		'de-de': "Ottaro"
	},

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revólver d'Água",
				'de-de': "Aquaknarre"
			},

			damage: 20,

		},
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
				'en-us': "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
				'fr-fr': "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
				'es-es': "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
				'it-it': "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
				'pt-br': "Você pode colocar 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
				'de-de': "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben."
			},
			damage: 50,

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


	stage: "Stage1",

	description: {
		'en-us': "As a result of strict training, each Dewott learns different forms for using the scalchops."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511590,
				tcgplayer: 226413
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511590,
				tcgplayer: 226413
			}
		},
	],
}

export default card

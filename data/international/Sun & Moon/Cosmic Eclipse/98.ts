import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Dhelmise",
		'fr-fr': "Sinistrail",
		'es-es': "Dhelmise",
		'it-it': "Dhelmise",
		'pt-br': "Dhelmise",
		'de-de': "Moruda"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		781,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Seaweed Grab",
				'fr-fr': "Algues Agrippantes",
				'es-es': "Agarre Algar",
				'it-it': "Alghe Avvolgenti",
				'pt-br': "Catando Algas",
				'de-de': "Seetanggriff"
			},
			effect: {
				'en-us': "Put a Trainer card from your discard pile into your hand.",
				'fr-fr': "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
				'es-es': "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
				'it-it': "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				'pt-br': "Coloque uma carta de Treinador da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 1 Trainerkarte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Buster Swing",
				'fr-fr': "Repoussoir",
				'es-es': "Golpe Destructor",
				'it-it': "Colpaccio",
				'pt-br': "Gingado",
				'de-de': "Widerstandsbrecher"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It wraps its prey in green seaweed and sucks away their vitality. It only likes to go after big prey like Wailord.",
	},

	thirdParty: {
		cardmarket: 408134,
		tcgplayer: 201273
	}
}

export default card

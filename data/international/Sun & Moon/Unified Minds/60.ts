import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'es-es': "Magnezone",
		'it-it': "Magnezone",
		'pt-br': "Magnezone",
		'de-de': "Magnezone"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 160,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Double Type",
				'fr-fr': "Type Double",
				'es-es': "Doble Tipo",
				'it-it': "Doppio Tipo",
				'pt-br': "Tipo Duplo",
				'de-de': "Doppeltyp"
			},
			effect: {
				'en-us': "As long as this Pokémon is in play, it is Lightning and Metal type.",
				'fr-fr': "Tant que ce Pokémon est en jeu, il est de type Lightning et Metal.",
				'es-es': "Mientras este Pokémon esté en juego, es de tipo Lightning y Metal.",
				'it-it': "Fintanto che questo Pokémon è in gioco, è di tipo Lightning e Metal.",
				'pt-br': "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo Lightning e Metal.",
				'de-de': "Solang dieses Pokémon im Spiel ist, ist es vom Typ Lightning und Metal."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Bolt",
				'fr-fr': "Foudre Aimantée",
				'es-es': "Relámpago Magnético",
				'it-it': "Saetta Magnetica",
				'pt-br': "Relâmpago Magnético",
				'de-de': "Magnetschlag"
			},
			effect: {
				'en-us': "Put a Trainer card from your discard pile into your hand.",
				'fr-fr': "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
				'es-es': "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
				'it-it': "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				'pt-br': "Coloque uma carta de Treinador da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 1 Trainerkarte aus deinem Ablagestapel auf deine Hand."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It uses radar to monitor its territory. Intruders are quickly disposed of with a hyper beam.",
	},

	thirdParty: {
		cardmarket: 388122,
		tcgplayer: 194986
	}
}

export default card

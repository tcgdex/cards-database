import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
		es: "Magnezone",
		it: "Magnezone",
		pt: "Magnezone",
		de: "Magnezone"
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
		en: "Magneton",
		fr: "Magnéton",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Double Type",
				fr: "Type Double",
				es: "Doble Tipo",
				it: "Doppio Tipo",
				pt: "Tipo Duplo",
				de: "Doppeltyp"
			},
			effect: {
				en: "As long as this Pokémon is in play, it is Lightning and Metal type.",
				fr: "Tant que ce Pokémon est en jeu, il est de type Lightning et Metal.",
				es: "Mientras este Pokémon esté en juego, es de tipo Lightning y Metal.",
				it: "Fintanto che questo Pokémon è in gioco, è di tipo Lightning e Metal.",
				pt: "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo Lightning e Metal.",
				de: "Solang dieses Pokémon im Spiel ist, ist es vom Typ Lightning und Metal."
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
				en: "Magnetic Bolt",
				fr: "Foudre Aimantée",
				es: "Relámpago Magnético",
				it: "Saetta Magnetica",
				pt: "Relâmpago Magnético",
				de: "Magnetschlag"
			},
			effect: {
				en: "Put a Trainer card from your discard pile into your hand.",
				fr: "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
				es: "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
				it: "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				pt: "Coloque uma carta de Treinador da sua pilha de descarte na sua mão.",
				de: "Nimm 1 Trainerkarte aus deinem Ablagestapel auf deine Hand."
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

	thirdParty: {
		cardmarket: 388122
	}
}

export default card

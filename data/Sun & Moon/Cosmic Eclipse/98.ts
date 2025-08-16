import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		es: "Dhelmise",
		it: "Dhelmise",
		pt: "Dhelmise",
		de: "Moruda"
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
				en: "Seaweed Grab",
				fr: "Algues Agrippantes",
				es: "Agarre Algar",
				it: "Alghe Avvolgenti",
				pt: "Catando Algas",
				de: "Seetanggriff"
			},
			effect: {
				en: "Put a Trainer card from your discard pile into your hand.",
				fr: "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
				es: "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
				it: "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				pt: "Coloque uma carta de Treinador da sua pilha de descarte na sua mão.",
				de: "Nimm 1 Trainerkarte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Buster Swing",
				fr: "Repoussoir",
				es: "Golpe Destructor",
				it: "Colpaccio",
				pt: "Gingado",
				de: "Widerstandsbrecher"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
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

	thirdParty: {
		cardmarket: 408134,
		tcgplayer: 201273
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
		'es-es': "Electrode",
		'it-it': "Electrode",
		'pt-br': "Electrode",
		'de-de': "Lektrobal"
	},

	illustrator: "Asako Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Electro Shaker",
				'fr-fr': "Shaker Électrique",
				'es-es': "Electrosacudida",
				'it-it': "Scossone Elettrico",
				'pt-br': "Agitador Elétrico",
				'de-de': "Elektrobeben"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may move any number of Lightning Energy from your Pokémon to your other Pokémon in any way you like.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez déplacer autant d’Énergie Lightning que vous voulez de vos Pokémon vers vos autres Pokémon, de la manière que vous voulez.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes mover cualquier cantidad de Energías Lightning de tus Pokémon a tus otros Pokémon de la manera que desees.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi distribuire a piacimento tutte le Energie Lightning assegnate ai tuoi Pokémon.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode mover qualquer número de Energia Lightning dos seus Pokémon para outros Pokémon seus como desejar.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du beliebig viele Lightning-Energien von deinen Pokémon beliebig auf deine anderen Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Speed Ball",
				'fr-fr': "Balle Rapide",
				'es-es': "Bola Rápida",
				'it-it': "Velocipalla",
				'pt-br': "Bola Veloz",
				'de-de': "Geschwindigkeitsball"
			},

			damage: 50,

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

	retreat: 1,

	description: {
		'en-us': "It explodes in response to even minor stimuli. It is feared, with the nickname of \"The Bomb Ball.\"",
	},

	thirdParty: {
		cardmarket: 368970,
		tcgplayer: 183812
	}
}

export default card

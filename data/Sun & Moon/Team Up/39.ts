import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
		es: "Electrode",
		it: "Electrode",
		pt: "Electrode",
		de: "Lektrobal"
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
		en: "Voltorb",
		fr: "Voltorbe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Electro Shaker",
				fr: "Shaker Électrique",
				es: "Electrosacudida",
				it: "Scossone Elettrico",
				pt: "Agitador Elétrico",
				de: "Elektrobeben"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may move any number of Lightning Energy from your Pokémon to your other Pokémon in any way you like.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez déplacer autant d’Énergie Lightning que vous voulez de vos Pokémon vers vos autres Pokémon, de la manière que vous voulez.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes mover cualquier cantidad de Energías Lightning de tus Pokémon a tus otros Pokémon de la manera que desees.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi distribuire a piacimento tutte le Energie Lightning assegnate ai tuoi Pokémon.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode mover qualquer número de Energia Lightning dos seus Pokémon para outros Pokémon seus como desejar.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du beliebig viele Lightning-Energien von deinen Pokémon beliebig auf deine anderen Pokémon verschieben."
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
				en: "Speed Ball",
				fr: "Balle Rapide",
				es: "Bola Rápida",
				it: "Velocipalla",
				pt: "Bola Veloz",
				de: "Geschwindigkeitsball"
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



}

export default card

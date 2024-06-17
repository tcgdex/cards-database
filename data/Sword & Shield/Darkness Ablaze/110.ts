import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [635],
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
		es: "Zweilous",
		it: "Zweilous",
		pt: "Zweilous",
		de: "Duodino"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Squall",
				fr: "Rafale Obscure",
				es: "Ráfaga Oscura",
				it: "Burrasca Oscura",
				pt: "Ventania Sombria",
				de: "Finsterböe"
			},
			effect: {
				en: "As often as you like during your turn, you may attach a Darkness Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Darkness de votre main à l'un de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Darkness de tu mano a 1 de tus Pokémon.",
				it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia Darkness dalla tua mano tutte le volte che vuoi.",
				pt: "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia Darkness da sua mão a 1 dos seus Pokémon.",
				de: "Beliebig oft während deines Zuges kannst du 1 Darkness-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Pitch-Black Fangs",
				fr: "Crocs Nuit Noire",
				es: "Colmillos Azabaches",
				it: "Zanne Buiopesto",
				pt: "Presas do Breu",
				de: "Pechschwarze Fänge"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "There are a slew of stories about villages that were destroyed by Hydreigon. It bites anything that moves."
	}
}

export default card

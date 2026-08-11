import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [635],

	name: {
		'en-us': "Hydreigon",
		'fr-fr': "Trioxhydre",
		'es-es': "Hydreigon",
		'it-it': "Hydreigon",
		'pt-br': "Hydreigon",
		'de-de': "Trikephalo"
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
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
		'es-es': "Zweilous",
		'it-it': "Zweilous",
		'pt-br': "Zweilous",
		'de-de': "Duodino"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dark Squall",
				'fr-fr': "Rafale Obscure",
				'es-es': "Ráfaga Oscura",
				'it-it': "Burrasca Oscura",
				'pt-br': "Ventania Sombria",
				'de-de': "Finsterböe"
			},
			effect: {
				'en-us': "As often as you like during your turn, you may attach a Darkness Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Darkness de votre main à l'un de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Darkness de tu mano a 1 de tus Pokémon.",
				'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia Darkness dalla tua mano tutte le volte che vuoi.",
				'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia Darkness da sua mão a 1 dos seus Pokémon.",
				'de-de': "Beliebig oft während deines Zuges kannst du 1 Darkness-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
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
				'en-us': "Pitch-Black Fangs",
				'fr-fr': "Crocs Nuit Noire",
				'es-es': "Colmillos Azabaches",
				'it-it': "Zanne Buiopesto",
				'pt-br': "Presas do Breu",
				'de-de': "Pechschwarze Fänge"
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


	stage: "Stage2",

	description: {
		'en-us': "There are a slew of stories about villages that were destroyed by Hydreigon. It bites anything that moves."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483429,
				tcgplayer: 219423
			}
		},
		{
			type: 'normal',
			stamp: ['thank-you'],
			thirdParty: {
				cardmarket: 547941
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483429,
				tcgplayer: 219423
			}
		},
	],
}

export default card

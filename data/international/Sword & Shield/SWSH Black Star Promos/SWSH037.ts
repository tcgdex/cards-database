import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hydreigon",
		'fr-fr': "Trioxhydre",
		'es-es': "Hydreigon",
		'it-it': "Hydreigon",
		'pt-br': "Hydreigon",
		'de-de': "Trikephalo"
	},

	illustrator: "Taira Akitsu",
	rarity: "Promo",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
		'de-de': "Duodino",
		'es-es': "Zweilous",
		'pt-br': "Zweilous",
		'it-it': "Zweilous"
	},

	abilities: [{
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
			'en-us': "As often as you like during your turn, you may attach a {D} Energy card from your hand to 1 of your Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {D} de votre main à l'un de vos Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {D} de tu mano a 1 de tus Pokémon.",
			'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia {D} dalla tua mano tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia {D} da sua mão a 1 dos seus Pokémon.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 {D}-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Pitch-Black Fangs",
			'fr-fr': "Crocs Nuit Noire",
			'es-es': "Colmillos Azabaches",
			'it-it': "Zanne Buiopesto",
			'pt-br': "Presas do Breu",
			'de-de': "Pechschwarze Fänge"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,

	description: {
		'en-us': "There are a slew of stories about villages that were destroyed by Hydreigon. It bites anything that moves."
	},

	stage: "Stage2",
	dexId: [635],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 487079
	}
}

export default card

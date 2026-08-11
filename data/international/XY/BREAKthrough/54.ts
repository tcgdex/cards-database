import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'es-es': "Magnezone",
		'it-it': "Magnezone",
		'pt-br': "Magnezone",
		'de-de': "Magnezone"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Magnetic Circuit",
				'fr-fr': "Circuit Magnétique",
				'es-es': "Circuito Magnético",
				'it-it': "Circuito Magnetico",
				'pt-br': "Circuito Magnético",
				'de-de': "Magnetischer Kreislauf"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may attach a Lightning Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Lightning de votre main à l'un de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Lightning de tu mano a 1 de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi assegnare una carta Energia Lightning che hai in mano a uno dei tuoi Pokémon tutte le volte che vuoi.",
				'pt-br': "Tantas vezes quanto desejar durante a sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Lightning da sua mão a 1 dos seus Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Lightning-Energiekarte von deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Blast",
				'fr-fr': "Grondement de Tonnerre",
				'es-es': "Estallido Trueno",
				'it-it': "Tuonobomba",
				'pt-br': "Explosão de Trovões",
				'de-de': "Donnerkeil"
			},
			effect: {
				'en-us': "Discard a Lightning Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Lightning attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía Lightning unida a este Pokémon.",
				'it-it': "Scarta un'Energia Lightning assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia Lightning ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Lightning-Energie auf deinen Ablagestapel."
			},
			damage: 100,

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
		'en-us': "It evolved from exposure to a special magnetic field. Three units generate magnetism.",
	},

	thirdParty: {
		cardmarket: 286300,
		tcgplayer: 107173
	}
}

export default card

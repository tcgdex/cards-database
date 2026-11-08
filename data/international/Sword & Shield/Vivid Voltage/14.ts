import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [291],

	name: {
		'en-us': "Ninjask",
		'fr-fr': "Ninjask",
		'es-es': "Ninjask",
		'it-it': "Ninjask",
		'pt-br': "Ninjask",
		'de-de': "Ninjask"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Nincada",
		'fr-fr': "Ningale",
		'es-es': "Nincada",
		'it-it': "Nincada",
		'pt-br': "Nincada",
		'de-de': "Nincada"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Cast-Off Shell",
				'fr-fr': "Coquille Libérante",
				'es-es': "Caparazón Desprendido",
				'it-it': "Scartaguscio",
				'pt-br': "Concha Descartada",
				'de-de': "Panzer abwerfen"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for a Shedinja and put it onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck un Munja, puis le placer sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes buscar en tu baraja a Shedinja y ponerlo en tu Banca. Baraja las cartas de tu baraja después.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi cercare nel tuo mazzo uno Shedinja e aggiungerlo alla tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode procurar Shedinja em seu baralho e colocá-lo no Banco. Em seguida, embaralhe seus cards.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dein Deck nach Ninjatom durchsuchen und es auf deine Bank legen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Absorb",
				'fr-fr': "Vole-Vie",
				'es-es': "Absorber",
				'it-it': "Assorbimento",
				'pt-br': "Absorção",
				'de-de': "Absorber"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0,


	stage: "Stage1",

	description: {
		'en-us': "Its cry leaves a lasting headache if heard for too long. It moves so quickly that it is almost invisible."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511490,
				tcgplayer: 226378
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511490,
				tcgplayer: 226378
			}
		},
	],
}

export default card

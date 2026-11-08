import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Ninjask",
		'fr-fr': "Ninjask",
		'es-es': "Ninjask",
		'it-it': "Ninjask",
		'pt-br': "Ninjask",
		'de-de': "Ninjask"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		291,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Nincada",
		'fr-fr': "Ningale",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Cast-off Shell",
				'fr-fr': "Coquille Libérante",
				'es-es': "Caparazón Desprendido",
				'it-it': "Scartaguscio",
				'pt-br': "Concha Descartada",
				'de-de': "Panzer abwerfen"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may search your deck for Shedinja and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez chercher Munja dans votre deck et le placer sur votre Banc. Mélangez ensuite votre deck.",
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
				"Colorless",
			],
			name: {
				'en-us': "Night Slash",
				'fr-fr': "Tranche-Nuit",
			},
			effect: {
				'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Because it moves so quickly, it sometimes becomes unseeable. It congregates around tree sap.",
	},

	thirdParty: {
		cardmarket: 280450,
		tcgplayer: 87788
	}
}

export default card

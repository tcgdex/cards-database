import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Salamence",
		'fr-fr': "Drattak",
		'es-es': "Salamence",
		'it-it': "Salamence",
		'pt-br': "Salamence",
		'de-de': "Brutalanda"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Breakwing",
				'fr-fr': "Aile Impitoyable",
				'es-es': "Rompealas",
				'it-it': "Tarpali",
				'pt-br': "Quebra-asa",
				'de-de': "Trümmerschwinge"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard all Pokémon Tool cards attached to each of your opponent’s Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire.",
				'es-es': "Cuando juegues a este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes descartar todas las cartas de Herramienta Pokémon unidas a cada uno de los Pokémon de tu rival.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi scartare tutte le carte Oggetto Pokémon assegnate ai Pokémon del tuo avversario.",
				'pt-br': "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode descartar todos os cards de Ferramenta Pokémon ligadas a cada um dos Pokémon de seu oponente.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du alle Pokémon-Ausrüstungen, die an die Pokémon deines Gegners angelegt sind, auf dessen Ablagestapel legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gaia Crush",
				'fr-fr': "Anéantissement de Gaïa",
			},
			effect: {
				'en-us': "Discard any Stadium card in play.",
				'fr-fr': "Défaussez toute carte Stade en jeu.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "As a result of its long-held dream of flying, its cellular structure changed, and wings grew out.",
	},

	thirdParty: {
		cardmarket: 281085,
		tcgplayer: 88901
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Salamence",
		fr: "Drattak",
		es: "Salamence",
		it: "Salamence",
		pt: "Salamence",
		de: "Brutalanda"
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
		en: "Shelgon",
		fr: "Drackhaus",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Breakwing",
				fr: "Aile Impitoyable",
				es: "Rompealas",
				it: "Tarpali",
				pt: "Quebra-asa",
				de: "Trümmerschwinge"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard all Pokémon Tool cards attached to each of your opponent’s Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire.",
				es: "Cuando juegues a este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes descartar todas las cartas de Herramienta Pokémon unidas a cada uno de los Pokémon de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi scartare tutte le carte Oggetto Pokémon assegnate ai Pokémon del tuo avversario.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode descartar todos os cards de Ferramenta Pokémon ligadas a cada um dos Pokémon de seu oponente.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du alle Pokémon-Ausrüstungen, die an die Pokémon deines Gegners angelegt sind, auf dessen Ablagestapel legen."
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
				en: "Gaia Crush",
				fr: "Anéantissement de Gaïa",
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
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



}

export default card

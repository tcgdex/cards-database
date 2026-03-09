import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Gengar",
		de: "Gengar"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Haunter",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Manipulate",
				de: "Manipulieren"
			},
			effect: {
				en: "When you play Gengar from your hand to evolve your Active Pokémon, you may put a Basic Pokémon (excluding Baby Pokémon) from your discard pile onto your bench. Then flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to that Pokémon.",
				de: "Wenn du Gengar aus deiner Hand spielst, um dein aktives Pokémon zu entwickeln, kannst du ein Basis-Pokémon (aber kein Baby-Pokémon) aus deinem Ablagestapel nehmen und auf deine Bank legen. Wirf dann 3 Münzen. Wähle für jeden geworfenen 'Kopf' eine Basis-Energiekarte aus deinem Ablagestapel und lege sie an dieses Pokémon an."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydrokinesis",
				de: "Hydrokinese"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned. If tails, the Defending Pokémon is now Confused.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verbrannt. Bei 'Zahl' ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275250,
		tcgplayer: 85669
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card

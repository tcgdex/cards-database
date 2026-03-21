import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Grounding",
				fr: "Source d'Énergie",
				de: "Energieerdung"
			},
			effect: {
				en: "Once during your opponent's turn, when any of your Pokémon is Knocked Out by your opponent's attacks, you may use this power. Choose a basic Energy card discarded from the Knocked Out Pokémon and attach it to Lanturn. You can't use more than 1 Energy Grounding Poké-Power each turn.",
				fr: "Une seule fois lors du tour de votre adversaire, lorsqu'1 de vos Pokémon est mis K.O par des attaques de votre adversaire, vous pouvez utiliser ce pouvoir. Choisissez une carte Énergie de base défaussée du Pokémon mis K.O et attachez-la à Lanturn. Vous ne pouvez pas utiliser plus d'1 Poké-Power Source d'Énergie par tour.",
				de: "Einmal während des Zuges deines Gegners kannst du, wenn 1 deiner Pokémon durch einen Angriff deines Gegners kampfunfähig wird, diese Poké-Power benutzen. Wähle eine Basis-Energiekarte, die an dem kampfunfähig gemachten Pokémon angelegt war und lege sie an Lanturn an. Du kannst nicht mehr als 1 Energieerdung Poké-Power pro Zug benutzen."
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
				en: "Lightning Strike",
				fr: "Frap'éclair",
				de: "Blitzschlag"
			},
			effect: {
				en: "You may discard all Lightning Energy attached to Lanturn. If you do, this attack's base damage is 90 instead of 50.",
				fr: "Vous pouvez défausser toutes les Énergies  attachées à Lanturn. Les dégâts de base de cette attaque sont alors de 90 au lieu de 50.",
				de: "Du darfst alle -Energiekarten, die an Lanturn angelegt sind, auf deinen Ablagestapel legen. Wenn du das machst, beträgt der Grundschaden dieses Angriffs 90 Schadenspunkte anstelle von 50 Schadenspunkten."
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

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277321,
		tcgplayer: 86607
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

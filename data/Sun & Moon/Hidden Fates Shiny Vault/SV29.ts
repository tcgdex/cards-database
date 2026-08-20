import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
		de: "Magnezone"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
		de: "Magneton"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Magnetic Circuit",
				fr: "Circuit Magnétique",
				de: "Magnetischer Kreislauf"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Metal Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Metal de votre main à l’un de vos Pokémon.",
				de: "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 {M}-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Zap Cannon",
				fr: "Élecanon",
				de: "Blitzkanone"
			},
			effect: {
				en: "This Pokémon can't use Zap Cannon during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
				de: "Dieses Pokémon kann Blitzkanone während deines nächsten Zuges nicht einsetzen."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,




	description: {
		en: "As it zooms through the sky, this Pokémon seems to be receiving signals of unknown origin, while transmitting signals of unknown purpose.",
		de: "Es heißt, dass es beim Herumfliegen mysteriöse Funkwellen aussende und unbekannte empfange."
	},
}

export default card

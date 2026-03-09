import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill",
		de: "Azumarill"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Marill",
		fr: "Marill"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drizzle",
				fr: "Crachin",
				de: "Niesel"
			},
			effect: {
				en: "If you have Water Energy cards in your hand, attach as many Water Energy cards as you like to any of your Active Pokémon.",
				fr: "Si vous avez des cartes Énergie  dans votre main, attachez-en autant que vous le voulez à votre ou vos Pokémon Actifs.",
				de: "Falls du -Energiekarten auf der Hand hast, kannst du beliebig viele -Energiekarten an deine Aktiven Pokémon anlegen."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Max Bubbles",
				fr: "Maxi bulles",
				de: "Riesen Seifenblasen"
			},
			effect: {
				en: "Flip a coin for each Energy attached to all of your Active Pokémon. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque carte Énergie attachée à chacun de vos Pokémon Actifs. Cette attaque inflige 30 dégâts multipliés par le nombre de face.",
				de: "Wirf für jede Energiekarte, die an deinen Aktiven Pokémon angelegt ist, eine Münze. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275807,
		tcgplayer: 83679
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card

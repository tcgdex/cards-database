import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz",
		de: "Panferno"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [392],

	hp: 110,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
		de: "Panpyro"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Rushing Flames",
				fr: "Flammes dévorantes",
				de: "Brausende Flammen"
			},
			effect: {
				en: "Discard as many Fire Energy cards as you like attached to your Pokémon in play. Flip a coin for each Energy card you discarded. This attack does 80 damage times the number of heads.",
				fr: "Défaussez autant d'Énergies Fire attachées à vos Pokémon en jeu que vous voulez. Lancez une pièce pour chaque carte Énergie défaussée. Cette attaque inflige 80 dégâts multipliés par le nombre de faces.",
				de: "Entferne beliebig viele {R}-Energien von deinen Pokémon und lege sie auf deinen Ablagestapel. Wirf für jede auf diese Weise auf deinen Ablagestapel gelegte Energiekarte 1 Münze. Dieser Angriff fügt 80 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "80×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Raserei"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each damage counter on Infernape.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Simiabraz.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Panferno zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	description: {
		en: "It uses unique fighting moves with fires on its hands and feet. It will take on any opponent.",
		de: "Es verwendet einzigartige Attacken mit dem Feuer an seinen Händen und Füßen. Stellt sich jedem Gegner."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86277,
				cardmarket: 278452
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278452,
				tcgplayer: 86277
			}
		}
	],

	retreat: 0
}

export default card

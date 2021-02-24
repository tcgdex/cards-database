import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Igglybuff",
		fr: "Toudoudou",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		174,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Jigglypuff from your hand onto Igglybuff (this counts as evolving Igglybuff) and remove all damage counters from Igglybuff.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Rondoudou de votre main sur Toudoudou (vous le faites ainsi évoluer) et retirer à Toudoudou tous ses marqueurs de dégât.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Inquire",
				fr: "Se renseigner",
			},
			effect: {
				en: "Draw a card. If you didn't play any Supporter card from your hand during this turn, draw 2 more cards.",
				fr: "Piochez une carte. Si vous n'avez pas joué de cartes Supporter de votre main ce tour-ci, piochez 2 cartes supplémentaires.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card

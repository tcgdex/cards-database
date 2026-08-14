import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Nidoran♀",
		fr: "Nidoran ♀",
		it: "Nidoran♀",
		de: "Nidoran W"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		29,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				it: "Sfuriate",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				it: "Lancia 3 volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				de: "Wirf drei Münzen. Dieser Angriff fügt jedesmal, wenn die Münze „Kopf“ zeigt, 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				it: "Cerca Famiglia",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon named Nidoran M or Nidoran F and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				fr: "Cherchez dans votre deck un Pokémon de base appelé Nidoran ♀ or Nidoran ♂ et placez-le sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				it: "Cerca nel tuo mazzo un Pokémon base chiamato Nidoran♀ o Nidoran♂ e mettilo nella tua Panchina. Poi rimischia le carte del tuo mazzo (se la tua Panchina è già completa, non puoi usare questo attacco).",
				de: "Suche in deinem Deck nach einer Basis-Pokémon-Karte mit dem Namen Nidoran♂ oder Nidoran♀ und lege sie auf deine Bank. Mische dein Deck danach. (Du kannst diesen Angriff nicht einsetzen, wenn deine Bank voll ist.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Although small, its venomous barbs make this Pokémon dangerous. The female has smaller horns.",
		fr: "Ce Pokémon est hérissé de dards empoisonnés. Les femelles ont des dards plus petits.",
		it: "Sebbene sia piccolo, i suoi barbigli velenosi rendono questo Pokémon molto pericoloso. La femmina ha i corni più piccoli.",
		de: "Obwohl es klein ist, machen seine giftigen Widerhaken dieses Pokémon doch gefährlich. Das Weibchen hat kleinere Hörner."
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	],
}

export default card

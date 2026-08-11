import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [971],
	set: Set,

	name: {
		'fr-fr': "Toutombe",
		'en-us': "Greavard",
		'es-es': "Greavard",
		'it-it': "Greavard",
		'pt-br': "Greavard",
		'de-de': "Gruff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Câlinerie",
			'en-us': "Play Rough",
			'es-es': "Carantoña",
			'it-it': "Carineria",
			'pt-br': "Jogo Duro",
			'de-de': "Knuddler"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It is said that a dog Pokémon that died in the wild without ever interacting with a human was reborn as this Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725180,
				tcgplayer: 509947,
				cardtrader: 255785
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 791826
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725180,
				tcgplayer: 509947,
				cardtrader: 255785
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
};

export default card

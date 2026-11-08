import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [949],
	set: Set,

	name: {
		'fr-fr': "Terracruel",
		'en-us': "Toedscruel",
		'es-es': "Toedscruel",
		'it-it': "Toedscruel",
		'pt-br': "Toedscruel",
		'de-de': "Tenterra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Terracool",
		'en-us': "Toedscool",
		'es-es': "Toedscool",
		'it-it': "Toedscool",
		'pt-br': "Toedscool",
		'de-de': "Tentagra"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Bataille",
			'en-us': "Beat",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Double Fouet",
			'en-us': "Double Whip",
			'es-es': "Doble Latigazo",
			'it-it': "Doppiafrustata",
			'pt-br': "Chicote Duplo",
			'de-de': "Doppelpeitsche"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 100 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "These Pokémon gather into groups and form colonies deep within forests. They absolutely hate it when strangers approach.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725199,
				tcgplayer: 509868,
				cardtrader: 255804
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725199,
				tcgplayer: 509868,
				cardtrader: 255804
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card

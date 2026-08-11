import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [521],
	set: Set,

	name: {
		'en-us': "Unfezant",
		'fr-fr': "Déflaisan",
		'es-es': "Unfezant",
		'it-it': "Unfezant",
		'pt-br': "Unfezant",
		'de-de': "Fasasnob"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
		'es-es': "Tranquill",
		'it-it': "Tranquill",
		'pt-br': "Tranquill",
		'de-de': "Navitaub"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'de-de': "Windstoß"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hurricane Wing",
			'fr-fr': "Tornad'Aile",
			'es-es': "Ala Huracán",
			'it-it': "Ala Uragano",
			'pt-br': "Asa do Furacão",
			'de-de': "Hurrikanschwinge"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 70 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'es-es': "Lanza 4 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Unfezant are exceptional fliers. The females are known for their stamina, while the males outclass them in terms of speed.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665680,
				tcgplayer: 276989
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665680,
				tcgplayer: 276989
			}
		},
	],
}

export default card

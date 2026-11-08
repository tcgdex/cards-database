import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Excadrill",
		'fr-fr': "Minotaupe",
		'es-es': "Excadrill",
		'it-it': "Excadrill",
		'pt-br': "Excadrill",
		'de-de': "Stalobor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		530,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Eleventh Hour Tackle",
				'fr-fr': "Tacle Désespéré",
				'es-es': "Placaje de Última Hora",
				'it-it': "Azione in Extremis",
				'pt-br': "Investida de Última Hora",
				'de-de': "Notstampfer"
			},
			effect: {
				'en-us': "If there are 3 or fewer cards in your deck, this attack does 150 more damage.",
				'fr-fr': "S’il y a 3 cartes ou moins dans votre deck, cette attaque inflige 150 dégâts supplémentaires.",
				'es-es': "Si hay 3 cartas o menos en tu baraja, este ataque hace 150 puntos de daño más.",
				'it-it': "Se ci sono tre o meno carte nel tuo mazzo, questo attacco infligge 150 danni in più.",
				'pt-br': "Se houver 3 ou menos cartas no seu baralho, este ataque causará 150 pontos de dano a mais.",
				'de-de': "Wenn 3 oder weniger Karten in deinem Deck sind, fügt diese Attacke 150 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Drill Bazooka",
				'fr-fr': "Perceuse Bazooka",
				'es-es': "Bazooka Taladro",
				'it-it': "Bazooka Perforante",
				'pt-br': "Bazuca Perfurante",
				'de-de': "Bazooka-Bohrer"
			},
			effect: {
				'en-us': "Discard the top 4 cards of your deck.",
				'fr-fr': "Défaussez les 4 cartes du dessus de votre deck.",
				'es-es': "Descarta las 4 primeras cartas de tu baraja.",
				'it-it': "Scarta le prime quattro carte del tuo mazzo.",
				'pt-br': "Descarte as 4 primeiras cartas do seu baralho.",
				'de-de': "Lege die obersten 4 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It can help in tunnel construction. Its drill has evolved into steel strong enough to bore through iron plates.",
	},

	thirdParty: {
		cardmarket: 398554,
		tcgplayer: 201357
	}
}

export default card

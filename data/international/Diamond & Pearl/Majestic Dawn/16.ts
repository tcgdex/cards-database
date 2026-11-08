import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'de-de': "Bronzong"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Cursed Alloy",
				'fr-fr': "Allié maudit",
				'de-de': "Fluchlegierung"
			},
			effect: {
				'en-us': "As long as Bronzong is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Poké-Powers between turns.",
				'fr-fr': "Tant qu'Archéodong est votre Pokémon Actif, placez entre deux tours 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant des Poké-Powers.",
				'de-de': "Solange Bronzong dein Aktives Pokémon ist, lege zwischen den Zügen 1 Schadensmarke auf jedes Pokémon deines Gegners, das mindestens 1 Poké-Power hat."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Pain Amplifier",
				'fr-fr': "Amplificateur de douleur",
				'de-de': "Schmerzverstärker"
			},
			effect: {
				'en-us': "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it.",
				'fr-fr': "Placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant déjà des marqueurs de dégât.",
				'de-de': "Lege 1 Schadensmarke auf jedes Pokémon deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Coating",
				'fr-fr': "Mettre une couche",
				'de-de': "Beschichtung"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Bronzong by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés à Archéodong par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der Bronzong durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "One caused a news sensation when it was dug up at a construction site after a 2,000-year sleep.",
	},

	thirdParty: {
		cardmarket: 278065,
		tcgplayer: 83993
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card

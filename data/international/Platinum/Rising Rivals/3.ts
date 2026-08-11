import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Darkrai G",
		'fr-fr': "Darkrai  Niv. 58",
		'de-de': "Darkrai G"
	},

	illustrator: "Makoto Imai",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [491],

	hp: 90,

	types: [
		"Darkness"
	],

	stage: "Basic",
	suffix: "SP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Eerie Aura",
				'fr-fr': "Aura sinistre",
				'de-de': "Unheimliche Aura"
			},
			effect: {
				'en-us': "Put 1 damage counter on each of your opponent's Pokémon that remains Asleep between turns.",
				'fr-fr': "Placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire qui reste Endormi entre deux tours.",
				'de-de': "Lege zwischen den Zügen 1 Schadensmarke auf jedes schlafende Pokémon deines Gegners, das nicht aufgewacht ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Darkness Sleep",
				'fr-fr': "Dodo obscurité",
				'de-de': "Finsternisschlaf"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, that Pokémon is now Asleep.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Endormi.",
				'de-de': "Wenn auf dem Verteidigenden Pokémon bereits mindestens 1 Schadensmarke liegt, schläft das Verteidigende Pokémon jetzt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278572,
				tcgplayer: 84710
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278572,
				tcgplayer: 84710
			}
		},
	],

}

export default card

import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Darkrai G",
		fr: "Darkrai  Niv. 58",
		de: "Darkrai G"
	},

	illustrator: "Makoto Imai",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	stage: "Basic",
	suffix: "SP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Eerie Aura",
				fr: "Aura sinistre",
				de: "Unheimliche Aura"
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon that remains Asleep between turns.",
				fr: "Placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire qui reste Endormi entre deux tours.",
				de: "Lege zwischen den Zügen 1 Schadensmarke auf jedes schlafende Pokémon deines Gegners, das nicht aufgewacht ist."
			},
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
				en: "Darkness Sleep",
				fr: "Dodo obscurité",
				de: "Finsternisschlaf"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, that Pokémon is now Asleep.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Endormi.",
				de: "Wenn auf dem Verteidigenden Pokémon bereits mindestens 1 Schadensmarke liegt, schläft das Verteidigende Pokémon jetzt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		tcgplayer: 84710
	}
}

export default card

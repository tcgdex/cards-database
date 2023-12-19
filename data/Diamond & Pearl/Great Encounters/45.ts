import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		de: "Magcargo"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Magma Armor",
				fr: "Magmascudo",
				de: "Magmapanzer"
			},
			effect: {
				en: "Magcargo can't be Asleep or Paralyzed.",
				fr: "Volcaropod ne peut pas être Endormi ou Paralysé.",
				de: "Magcargo kann nicht schlafen oder gelähmt sein."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Lava Plume",
				fr: "Ébullilave",
				de: "Flammensturm"
			},
			effect: {
				en: "You may discard the top card of your deck. If you do, the Defending Pokémon is now Burned.",
				fr: "Vous pouvez défausser la carte du dessus de votre deck. Le Pokémon Défenseur est alors Brûlé.",
				de: "Du kannst die oberste Karte deines Decks auf deinen Ablagestapel legen. Wenn du das machst, ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card

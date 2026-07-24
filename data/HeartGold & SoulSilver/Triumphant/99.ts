import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Darkrai & Cresselia LEGEND",
		fr: "Darkrai & Cresselia LÉGENDE",
		de: "Darkrai & Cresselia LEGENDE"
	},

	illustrator: "Shinji Higuchi + Noriko Takaya",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [488, 491],
	hp: 150,

	types: [
		"Darkness",
		"Psychic"
	],

	suffix: "Legend",

	attacks: [{
		name: {
			en: "Lost Crisis",
			fr: "",
			de: "Nirgendwo-Krise"
		},

		effect: {
			en: "Choose 2 Energy attached to Darkrai & Cresselia LEGEND and put them in the Lost Zone. If any of your opponent's Pokémon would be Knocked Out by damage from this attack, put that Pokémon and all cards attached to it in the Lost Zone instead of discarding it.",
			fr: "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Darkrai & Cresselia LÉGENDE.",
			de: "Wähle 2 an Darkrai- & Cresselia-LEGENDE angelegte Energiekarten und lege sie ins Nirgendwo. Wenn ein Pokémon deines Gegners durch diesen Angriff kampfunfähig würde, lege dieses Pokémon und alle daran angelegten Karten nicht auf den Ablagestapel, sondern ins Nirgendwo."
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Moon's Invite",
			de: "Mondeinladung"
		},

		effect: {
			en: "Move as many damage counters on your opponent's Pokémon as you like to any of your opponent's other Pokémon in any way you like.",
			de: "Verschiebe beliebig viele Schadensmarken von Pokémon deines Gegners in beliebiger Verteilung auf andere gegnerische Pokémon."
		},

		cost: ["Psychic"]
	}],

	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,

	effect: {
		en: "[2DD] Lost Crisis (100) Choose 2 Energy attached to Darkrai and Cresselia LEGEND and put them in the Lost Zone. If any of your opponent’s Pokémon would be Knocked Out by damage from the attack, put that Pokémon and all cards attached to it in the Lost Zone instead of discarding it."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84705,
				cardmarket: 279629
			},
		},
	],

}

export default card

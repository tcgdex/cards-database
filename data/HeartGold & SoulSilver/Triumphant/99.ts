import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Darkrai & Cresselia LEGEND",
		fr: "Darkrai & Cresselia LÉGENDE",
		de: "Darkrai & Cresselia LEGENDE"
	},

	illustrator: "Shinji Higuchi + Noriko Takaya/樋口真嗣+高屋法子",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		488,
	],

	hp: 150,

	types: [
		"Darkness",
		"Psychic",
	],

	suffix: "Legend",

	attacks: [{
		name: {
			fr: "",
			de: "Nirgendwo-Krise"
		},

		effect: {
			fr: "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Darkrai & Cresselia LÉGENDE.",
			de: "Wähle 2 an Darkrai- & Cresselia-LEGENDE angelegte Energiekarten und lege sie ins Nirgendwo. Wenn ein Pokémon deines Gegners durch diesen Angriff kampfunfähig würde, lege dieses Pokémon und alle daran angelegten Karten nicht auf den Ablagestapel, sondern ins Nirgendwo."
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"]
	}, {
		name: {
			de: "Mondeinladung"
		},

		effect: {
			de: "Verschiebe beliebig viele Schadensmarken von Pokémon deines Gegners in beliebiger Verteilung auf andere gegnerische Pokémon."
		},

		cost: ["Psychic"]
	}],

	stage: "Basic",
	retreat: 0,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	effect: {
		en: "[2DD] Lost Crisis (100) Choose 2 Energy attached to Darkrai and Cresselia LEGEND and put them in the Lost Zone. If any of your opponent’s Pokémon would be Knocked Out by damage from the attack, put that Pokémon and all cards attached to it in the Lost Zone instead of discarding it."
	}
}

export default card

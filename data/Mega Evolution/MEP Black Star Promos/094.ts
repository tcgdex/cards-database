import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Exeggutor",
		es: "Exeggutor de Alola"
	},

	illustrator: "yuu",
	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage1",
	dexId: [103],

	evolveFrom: {
		en: "Exeggcute",
		es: "Exeggcute"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Scale Up",
			es: "Crecer",
		},

		effect: {
			en: "If this Pokémon has 6 or more {G} Energy attached, it gets +250 HP.",
			es: "Si este Pokémon tiene 6 Energías {G} o más unidas, obtiene 250 PS más.",
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Mega Drain",
			es: "Megaagotar",
		},

		effect: {
			en: "Heal 50 damage from this Pokémon.",
			es: "Cura 50 puntos de daño a este Pokémon.",
		},

		damage: 150
	}],

	retreat: 4,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895609,
				tcgplayer: 713262
			}
		}
	],
}

export default card

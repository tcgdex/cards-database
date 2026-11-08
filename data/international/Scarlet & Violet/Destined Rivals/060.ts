import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [460],
	set: Set,

	name: {
		'en-us': "Abomasnow",
		'fr-fr': "Blizzaroi",
		'de-de': "Rexblisar",
		'it-it': "Abomasnow",
		'es-es': "Abomasnow",
		'pt-br': "Abomasnow",
		'es-mx': "Abomasnow"
	},


	illustrator: "kamonabe",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'de-de': "Shnebedeck",
		'it-it': "Snover",
		'es-es': "Snover",
		'pt-br': "Snover",
		'es-mx': "Snover"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'de-de': "Sprungangriff",
			'it-it': "Affondo Lungo",
			'es-es': "Arremeter",
			'pt-br': "Bote",
			'es-mx': "Embestida Brusca"
		},

		damage: 90
	}, {
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			'en-us': "Frozen Wood",
			'fr-fr': "Bois Glacé",
			'de-de': "Frostiges Holz",
			'it-it': "Legno Ghiacciato",
			'es-es': "Madera Congelada",
			'pt-br': "Madeira Congelada",
			'es-mx': "Madera Congelada"
		},

		effect: {
			'en-us': "If this Pokémon has 2 or more {G} Energy attached, this attack does 120 more damage.",
			'fr-fr': "Si 2 Énergies {G} ou plus sont attachées à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			'de-de': "Wenn an dieses Pokémon mindestens 2 {G}-Energien angelegt sind, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha due o più Energie {G} assegnate, questo attacco infligge 120 danni in più.",
			'es-es': "Si este Pokémon tiene 2 Energías {G} o más unidas, este ataque hace 120 puntos de daño más.",
			'pt-br': "Se este Pokémon tiver 2 ou mais Energias {G} ligadas a ele, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si este Pokémon tiene 2 Energías {G} o más unidas, este ataque hace 120 puntos de daño más."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825934,
				tcgplayer: 632873
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825934,
				tcgplayer: 632873
			}
		},
	],
}

export default card

import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'de-de': "Tangoloss",
		'it-it': "Tangrowth",
		'es-es': "Tangrowth",
		'pt-br': "Tangrowth",
		'es-mx': "Tangrowth"
	},

	illustrator: "REND",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'de-de': "Tangela",
		'it-it': "Tangela",
		'es-es': "Tangela",
		'pt-br': "Tangela",
		'es-mx': "Tangela"
	},
	stage: "Stage1",
	dexId: [465],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Absorb",
			'fr-fr': "Vole-Vie",
			'de-de': "Absorber",
			'it-it': "Assorbimento",
			'es-es': "Absorber",
			'pt-br': "Absorção",
			'es-mx': "Absorción"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Pumped-Up Whip",
			'fr-fr': "Fouet Gonflé à Bloc",
			'de-de': "Aufgeladene Peitsche",
			'it-it': "Frustata Rinforzata",
			'es-es': "Latigazo Vigorizado",
			'pt-br': "Chicotada Bombada",
			'es-mx': "Latigazo Fortachón"
		},

		effect: {
			'en-us': "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack does 140 more damage.",
			'fr-fr': "Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 140 dégâts supplémentaires.",
			'de-de': "Wenn an dieses Pokémon mindestens 2 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 140 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha almeno due Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 140 danni in più.",
			'es-es': "Si este Pokémon tiene por lo menos 2 Energías adicionales unidas (además de las del coste de este ataque), este ataque hace 140 puntos de daño más.",
			'pt-br': "Se este Pokémon tiver pelo menos 2 Energias adicionais ligadas a ele (além do custo deste ataque), este ataque causará 140 pontos de dano a mais.",
			'es-mx': "Si este Pokémon tiene al menos 2 Energías adicionales unidas (además de las del costo de este ataque), este ataque hace 140 puntos de daño más."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851078,
				tcgplayer: 654346
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851078,
				tcgplayer: 654346
			}
		},
	],
}

export default card

import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1009],
	set: Set,

	name: {
		'en-us': "Walking Wake",
		'fr-fr': "Serpente-Eau",
		'es-es': "Ondulagua",
		'it-it': "Acquecrespe",
		'pt-br': "Onda Ando",
		'de-de': "Windewoge"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Aurora Gain",
			'fr-fr': "Puissance Boréale",
			'es-es': "Ganar Aurora",
			'it-it': "Prendiaurora",
			'pt-br': "Aurora",
			'de-de': "Aurora-Verstärkung"
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Undulating Slice",
			'fr-fr': "Tranche Ondulante",
			'es-es': "Tajo Ondulante",
			'it-it': "Taglio Ondulante",
			'pt-br': "Corte Ondulado",
			'de-de': "Wellenschnitt"
		},

		effect: {
			'en-us': "Put up to 9 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way.",
			'fr-fr': "Placez jusqu'à 9 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé de cette façon.",
			'es-es': "Pon hasta 9 contadores de daño en este Pokémon. Este ataque hace 20 puntos de daño por cada contador de daño que hayas colocado de esta manera.",
			'it-it': "Metti fino a nove segnalini danno su questo Pokémon. Questo attacco infligge 20 danni per ogni segnalino danno che hai messo in questo modo.",
			'pt-br': "Coloque até 9 contadores de dano neste Pokémon. Este ataque causa 20 pontos de dano para cada contador de dano colocado desta forma.",
			'de-de': "Lege bis zu 9 Schadensmarken auf dieses Pokémon. Diese Attacke fügt für jede auf diese Weise platzierte Schadensmarke 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "This ferocious creature is shrouded in mystery. It's named after an aquatic monster mentioned in an old expedition journal.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769237,
				tcgplayer: 550107
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769237,
				tcgplayer: 550107
			}
		},
	],

	illustrator: "kawayoo",

}

export default card

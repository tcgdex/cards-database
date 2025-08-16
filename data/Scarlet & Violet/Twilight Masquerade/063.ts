import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1009],
	set: Set,

	name: {
		en: "Walking Wake",
		fr: "Serpente-Eau",
		es: "Ondulagua",
		it: "Acquecrespe",
		pt: "Onda Ando",
		de: "Windewoge"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Aurora Gain",
			fr: "Puissance Boréale",
			es: "Ganar Aurora",
			it: "Prendiaurora",
			pt: "Aurora",
			de: "Aurora-Verstärkung"
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Undulating Slice",
			fr: "Tranche Ondulante",
			es: "Tajo Ondulante",
			it: "Taglio Ondulante",
			pt: "Corte Ondulado",
			de: "Wellenschnitt"
		},

		effect: {
			en: "Put up to 9 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way.",
			fr: "Placez jusqu'à 9 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé de cette façon.",
			es: "Pon hasta 9 contadores de daño en este Pokémon. Este ataque hace 20 puntos de daño por cada contador de daño que hayas colocado de esta manera.",
			it: "Metti fino a nove segnalini danno su questo Pokémon. Questo attacco infligge 20 danni per ogni segnalino danno che hai messo in questo modo.",
			pt: "Coloque até 9 contadores de dano neste Pokémon. Este ataque causa 20 pontos de dano para cada contador de dano colocado desta forma.",
			de: "Lege bis zu 9 Schadensmarken auf dieses Pokémon. Diese Attacke fügt für jede auf diese Weise platzierte Schadensmarke 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "kawayoo",

	thirdParty: {
		cardmarket: 769237
	}
}

export default card

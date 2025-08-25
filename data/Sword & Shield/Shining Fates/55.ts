import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [845],
	set: Set,

	name: {
		fr: "Nigosier VMAX",
		en: "Cramorant VMAX",
		es: "Cramorant VMAX",
		it: "Cramorant VMAX",
		pt: "Cramorant VMAX",
		de: "Urgl VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Nigosier-V",
		en: "Cramorant V"
	},

	attacks: [{
		name: {
			fr: "Jetomax",
			en: "Max Jet",
			es: "Maxipropulsión",
			it: "Dynagetto",
			pt: "Jato Max",
			de: "Dyna-Schwall"
		},

		effect: {
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			es: "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
			pt: "Jogue 1 moeda para cada Energia ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara.",
			de: "Wirf 1 Münze für jede an dieses Pokémon angelegte Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 539298,
		tcgplayer: 232534
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [419],
	set: Set,

	name: {
		en: "Floatzel",
		fr: "Mustéflott",
		es: "Floatzel",
		it: "Floatzel",
		pt: "Floatzel",
		de: "Bojelin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
		es: "Buizel",
		it: "Buizel",
		pt: "Buizel",
		de: "Bamelin"
	},


	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			es: "Hidrobomba",
			it: "Idropompa",
			pt: "Jato d'Água",
			de: "Hydropumpe"
		},

		effect: {
			en: "This attack does 20 more damage for each {W} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia {W} ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Gemi",

	thirdParty: {
        cardmarket: 702342,
        tcgplayer: 487893
    }
}

export default card
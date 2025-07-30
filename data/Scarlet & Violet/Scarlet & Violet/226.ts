import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Magnezone ex",
		fr: "Magnézone-ex",
		es: "Magnezone ex",
		it: "Magnezone-ex",
		pt: "Magnezone ex",
		de: "Magnezone-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],

	evolveFrom: {
		en: "Magneton"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Energy Crush",
			fr: "Écras'Énergie",
			es: "Comprimir Energía",
			it: "Sgretolenergia",
			pt: "Esmagamento de Energia",
			de: "Zermalmende Energie"
		},

		effect: {
			en: "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			it: "Questo attacco infligge 50 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Pulse Launcher",
			fr: "Lanceur d'Impulsions",
			es: "Lanzapulsos",
			it: "Lancimpulso",
			pt: "Lançador de Pulsos",
			de: "Pulswerfer"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "PLANETA Tsuji",

	thirdParty: {
		cardmarket: 702361
	}
}

export default card
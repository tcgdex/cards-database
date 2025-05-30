import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Magnezone ex",
		fr: "Magnézone-ex",
		de: "Magnezone-ex",
		it: "Magnezone-ex",
		es: "Magnezone ex",
		pt: "Magnezone ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Energy Crush",
			fr: "Écras'Énergie",
			de: "Zermalmende Energie",
			it: "Sgretolenergia",
			es: "Comprimir Energía",
			pt: "Esmagamento de Energia"
		},

		effect: {
			en: "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 50 Schadenspunkte zu.",
			it: "Questo attacco infligge 50 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			es: "Este ataque hace 50 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			pt: "Este ataque causa 50 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente."
		},

		damage: "50×"
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Pulse Launcher",
			fr: "Lanceur d'Impulsions",
			de: "Pulswerfer",
			it: "Lancimpulso",
			es: "Lanzapulsos",
			pt: "Lançador de Pulsos"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card
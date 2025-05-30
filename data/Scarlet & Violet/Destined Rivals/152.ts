import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Greedent",
		fr: "Rongrigou",
		de: "Schlaraffel",
		it: "Greedent",
		es: "Greedent",
		pt: "Greedent"
	},

	illustrator: "kantaro",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			it: "Morso",
			es: "Mordisco",
			pt: "Mordida"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Enhanced Fang",
			fr: "Croc Amélioré",
			de: "Spezial-Zahn",
			it: "Zanne Super",
			es: "Incisivos Mejorados",
			pt: "Presa Acentuada"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 80 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 80 danni in più.",
			es: "Si este Pokémon tiene una Herramienta Pokémon unida, este ataque hace 80 puntos de daño más.",
			pt: "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 80 pontos de dano a mais."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card
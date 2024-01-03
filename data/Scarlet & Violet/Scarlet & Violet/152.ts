import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Greedent",
		fr: "Rongrigou",
		es: "Greedent",
		it: "Greedent",
		pt: "Greedent",
		de: "Schlaraffel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skwovet"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Enhanced Fang",
			fr: "Croc Amélioré",
			es: "Incisivos Mejorados",
			it: "Zanne Super",
			pt: "Presa Acentuada",
			de: "Spezial-Zahn"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 80 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si este Pokémon tiene una Herramienta Pokémon unida, este ataque hace 80 puntos de daño más.",
			it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 80 danni in più.",
			pt: "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card
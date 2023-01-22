import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Volcanion",
		fr: "Volcanion",
		es: "Volcanion",
		it: "Volcanion",
		pt: "Volcanion",
		de: "Volcanion"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Hydro Burn",
			fr: "Brûlure Hydro",
			es: "Hidroquemadura",
			it: "Idroustione",
			pt: "Hidroqueimadura",
			de: "Hydrobrand"
		},

		effect: {
			en: "If this Pokémon has any Water Energy attached, this attack does 80 more damage.",
			fr: "Si au moins une Énergie Water est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía Water unida a él, este ataque hace 80 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie Water assegnate, questo attacco infligge 80 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Water ligada a ele, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 Water-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card
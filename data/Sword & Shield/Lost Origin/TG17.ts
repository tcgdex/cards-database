import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu VMAX",
		fr: "Pikachu VMAX",
		es: "Pikachu VMAX",
		it: "Pikachu VMAX",
		pt: "Pikachu VMAX",
		de: "Pikachu VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pikachu V",
		fr: "Pikachu-V",
		es: "Pikachu V",
		it: "Pikachu-V",
		pt: "Pikachu V",
		de: "Pikachu-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "G-Max Volt Tackle",
			fr: "Électacle G-Max",
			es: "Gigaplacaje Eléctrico",
			it: "Gigalocomovolt",
			pt: "Investida Trovão G-Max",
			de: "Giga-Volttackle"
		},

		effect: {
			en: "You may discard all Energy from this Pokémon. If you do, this attack does 150 more damage.",
			fr: "Vous pouvez défausser toute l'Énergie de ce Pokémon. Dans ce cas, cette attaque inflige 150 dégâts supplémentaires.",
			es: "Puedes descartar todas las Energías de este Pokémon. Si lo haces, este ataque hace 150 puntos de daño más.",
			it: "Puoi scartare tutte le Energie da questo Pokémon. Se lo fai, questo attacco infligge 150 danni in più.",
			pt: "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, este ataque causará 150 pontos de dano a mais.",
			de: "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card
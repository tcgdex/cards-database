import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Pikachu VMAX",
		fr: "Pikachu VMAX",
		de: "Pikachu VMAX",
		es: "Pikachu VMAX",
		pt: "Pikachu VMAX",
		it: "Pikachu VMAX"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "VMAX",

	evolveFrom: {
		fr: "Pikachu-V",
		de: "Pikachu-V",
		es: "Pikachu V",
		pt: "Pikachu V",
		it: "Pikachu-V",
		en: "Pikachu V"
	},

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			fr: "Électacle G-Max",
			de: "Giga-Volttackle",
			es: "Gigaplacaje Eléctrico",
			pt: "Investida Trovão G-Max",
			it: "Gigalocomovolt",
			en: "G-Max Volt Tackle"
		},

		effect: {
			fr: "Vous pouvez défausser toute l'Énergie de ce Pokémon. Dans ce cas, cette attaque inflige 150 dégâts supplémentaires.",
			de: "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 150 Schadenspunkte mehr zu.",
			es: "Puedes descartar todas las Energías de este Pokémon. Si lo haces, este ataque hace 150 puntos de daño más.",
			pt: "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, este ataque causará 150 pontos de dano a mais.",
			it: "Puoi scartare tutte le Energie da questo Pokémon. Se lo fai, questo attacco infligge 150 danni in più.",
			en: "You may discard all Energy from this Pokémon. If you do, this attack does 150 more damage."
		},

		damage: "120+"
	}],

	retreat: 2,
	regulationMark: "D",

	thirdParty: {
		cardmarket: 576730
	}
}

export default card
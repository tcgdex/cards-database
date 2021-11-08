import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		fr: "Pikachu VMAX",
		en: "Pikachu VMAX",
		es: "Pikachu VMAX",
		it: "Pikachu VMAX",
		pt: "Pikachu VMAX",
		de: "Pikachu VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Pikachu-V",
		en: "Pikachu V",
		es: "Pikachu V",
		it: "Pikachu-V",
		pt: "Pikachu V",
		de: "Pikachu-V"
	},

	attacks: [{
		name: {
			fr: "Électacle G-Max",
			en: "G-Max Volt Tackle",
			es: "Gigaplacaje Eléctrico",
			it: "Gigalocomovolt",
			pt: "Investida Trovão G-Max",
			de: "Giga-Volttackle"
		},

		effect: {
			fr: "Vous pouvez défausser toute l'Énergie de ce Pokémon. Dans ce cas, cette attaque inflige 150 dégâts supplémentaires.",
			en: "You may discard all Energy from this Pokémon. If you do, this attack does 150 more damage.",
			es: "Puedes descartar todas las Energías de este Pokémon. Si lo haces, este ataque hace 150 puntos de daño más.",
			it: "Puoi scartare tutte le Energie da questo Pokémon. Se lo fai, questo attacco infligge 150 danni in più.",
			pt: "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, este ataque causará 150 pontos de dano a mais.",
			de: "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX"
}

export default card
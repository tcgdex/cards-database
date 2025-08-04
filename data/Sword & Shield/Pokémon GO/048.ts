import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal VMAX",
		fr: "Melmetal VMAX",
		es: "Melmetal VMAX",
		it: "Melmetal VMAX",
		pt: "Melmetal VMAX",
		de: "Melmetal VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],

	evolveFrom: {
		en: "Melmetal V",
		fr: "Melmetal-V",
		es: "Melmetal V",
		it: "Melmetal-V",
		pt: "Melmetal V",
		de: "Melmetal-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Metal", "Metal", "Metal"],

		name: {
			en: "G-Max Juggernaut",
			fr: "Mastodonte G-Max",
			es: "Gigagigante",
			it: "Gigadevastazione",
			pt: "Caminhão de Carga G-Max",
			de: "Giga-Koloss"
		},

		effect: {
			en: "This attack does 60 more damage for each extra Metal Energy attached to this Pokémon (in addition to this attack's cost). You can't add more than 120 damage in this way.",
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque Énergie Metal supplémentaire attachée à ce Pokémon (en plus du coût de cette attaque). Vous ne pouvez pas ajouter plus de 120 dégâts de cette façon.",
			es: "Este ataque hace 60 puntos de daño más por cada Energía Metal adicional unida a este Pokémon (además de las del coste de este ataque). No puedes añadir más de 120 puntos de daño de esta manera.",
			it: "Questo attacco infligge 60 danni in più per ogni Energia Metal extra assegnata a questo Pokémon, in aggiunta a quelle del costo di questo attacco. Non puoi aggiungere più di 120 danni in questo modo.",
			pt: "Este ataque causa 60 pontos de dano a mais para cada Energia Metal adicional ligada a este Pokémon (além do custo deste ataque). Você não pode adicionar mais de 120 pontos de dano desta forma.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte extra Metal-Energie (zusätzlich zu den Kosten dieser Attacke) 60 Schadenspunkte mehr zu. Du kannst auf diese Weise höchstens 120 Schadenspunkte mehr zufügen."
		},

		damage: "160+"
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 664591,
		tcgplayer: 277023
	}
}

export default card

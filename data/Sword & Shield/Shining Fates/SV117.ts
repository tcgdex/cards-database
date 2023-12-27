import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Angoliath VMAX",
		en: "Grimmsnarl VMAX",
		es: "Grimmsnarl VMAX",
		it: "Grimmsnarl VMAX",
		pt: "Grimmsnarl VMAX",
		de: "Olangaar VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Angoliath-V",
		en: "Grimmsnarl V"
	},

	attacks: [{
		name: {
			fr: "Perceuse G-Max",
			en: "G-Max Drill",
			es: "Gigataladro",
			it: "Gigatrivella",
			pt: "Broca G-Max",
			de: "Giga-Bohrer"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie Darkness supplémentaire attachée à ce Pokémon (en plus du coût de cette attaque). Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
			en: "This attack does 50 more damage for each extra Darkness Energy attached to this Pokémon (in addition to this attack's cost). You can't add more than 100 damage in this way.",
			es: "Este ataque hace 50 puntos de daño más por cada Energía Darkness adicional unida a este Pokémon (además de las del coste de este ataque). No puedes añadir más de 100 puntos de daño de esta manera.",
			it: "Questo attacco infligge 50 danni in più per ogni Energia Darkness extra assegnata a questo Pokémon, in aggiunta a quelle del costo di questo attacco. Non puoi aggiungere più di 100 danni in questo modo.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Energia Darkness adicional ligada a este Pokémon (além do custo deste ataque). Você não pode adicionar mais de 100 pontos de dano desta forma.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte extra Darkness-Energie (zusätzlich zu den Kosten dieser Attacke) 50 Schadenspunkte mehr zu. Du kannst auf diese Weise höchstens 100 Schadenspunkte mehr zufügen."
		},

		damage: "170+",
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "VMAX"
}

export default card

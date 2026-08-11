import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		'en-us': "Melmetal VMAX",
		'fr-fr': "Melmetal VMAX",
		'es-es': "Melmetal VMAX",
		'it-it': "Melmetal VMAX",
		'pt-br': "Melmetal VMAX",
		'de-de': "Melmetal VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Melmetal V",
		'fr-fr': "Melmetal-V",
		'es-es': "Melmetal V",
		'it-it': "Melmetal-V",
		'pt-br': "Melmetal V",
		'de-de': "Melmetal-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Metal", "Metal", "Metal"],

		name: {
			'en-us': "G-Max Juggernaut",
			'fr-fr': "Mastodonte G-Max",
			'es-es': "Gigagigante",
			'it-it': "Gigadevastazione",
			'pt-br': "Caminhão de Carga G-Max",
			'de-de': "Giga-Koloss"
		},

		effect: {
			'en-us': "This attack does 60 more damage for each extra Metal Energy attached to this Pokémon (in addition to this attack's cost). You can't add more than 120 damage in this way.",
			'fr-fr': "Cette attaque inflige 60 dégâts supplémentaires pour chaque Énergie Metal supplémentaire attachée à ce Pokémon (en plus du coût de cette attaque). Vous ne pouvez pas ajouter plus de 120 dégâts de cette façon.",
			'es-es': "Este ataque hace 60 puntos de daño más por cada Energía Metal adicional unida a este Pokémon (además de las del coste de este ataque). No puedes añadir más de 120 puntos de daño de esta manera.",
			'it-it': "Questo attacco infligge 60 danni in più per ogni Energia Metal extra assegnata a questo Pokémon, in aggiunta a quelle del costo di questo attacco. Non puoi aggiungere più di 120 danni in questo modo.",
			'pt-br': "Este ataque causa 60 pontos de dano a mais para cada Energia Metal adicional ligada a este Pokémon (além do custo deste ataque). Você não pode adicionar mais de 120 pontos de dano desta forma.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte extra Metal-Energie (zusätzlich zu den Kosten dieser Attacke) 60 Schadenspunkte mehr zu. Du kannst auf diese Weise höchstens 120 Schadenspunkte mehr zufügen."
		},

		damage: "160+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665271,
				tcgplayer: 277023
			}
		},
	],
}

export default card

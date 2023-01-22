import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		es: "Exeggutor",
		it: "Exeggutor",
		pt: "Exeggutor",
		de: "Kokowei"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		it: "Exeggcute",
		pt: "Exeggcute",
		de: "Owei"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Powerful Storm",
			fr: "Tempête Puissante",
			es: "Tormenta Recia",
			it: "Tempestona",
			pt: "Tempestade Poderosa",
			de: "Mächtiger Sturm"
		},

		effect: {
			en: "This attack does 20 damage for each Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Énergie attachée à tous vos Pokémon.",
			es: "Este ataque hace 20 puntos de daño por cada Energía unida a todos tus Pokémon.",
			it: "Questo attacco infligge 20 danni per ogni Energia assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 20 pontos de dano para cada Energia ligada a todos os seus Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Energie 20 Schadenspunkte zu."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Fezandipiti",
		fr: "Favianos",
		es: "Fezandipiti",
		it: "Fezandipiti",
		pt: "Fezandipiti",
		de: "Beatori"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Adrena-Pheromone",
			fr: "Adréna-Phéromone",
			es: "Adrenalina Feromona",
			it: "Adrena-Feromone",
			pt: "Adrena-feromônio",
			de: "Adrena-Pheromon"
		},

		effect: {
			en: "If this Pokémon has any {D} Energy attached and is damaged by an attack, flip a coin. If heads, prevent that damage.",
			fr: "Si ce Pokémon a au moins une Énergie {D} attachée et qu'il subit les dégâts d'une attaque, lancez une pièce. Si c'est face, évitez ces dégâts.",
			es: "Si este Pokémon tiene alguna Energía {D} unida y resulta dañado por un ataque, lanza 1 moneda. Si sale cara, se evita ese daño.",
			it: "Se questo Pokémon ha delle Energie {D} assegnate e viene danneggiato da un attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			pt: "Se este Pokémon tiver alguma Energia {D} ligada a ele e for danificado por um ataque, jogue uma moeda. Se sair cara, previna aquele dano.",
			de: "Wenn an dieses Pokémon mindestens 1 {D}-Energie angelegt ist und es durch eine Attacke Schaden erhält, wirf 1 Münze. Verhindere bei Kopf jenen Schaden."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Energy Feather",
			fr: "Plume Énergétique",
			es: "Pluma Energía",
			it: "Piuma Energetica",
			pt: "Pluma de Energia",
			de: "Energiefeder"
		},

		effect: {
			en: "This attack does 30 damage for each Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée à ce Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada Energía unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni per ogni Energia assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada Energia ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 30 Schadenspunkte zu."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Kouki Saitou"
}

export default card

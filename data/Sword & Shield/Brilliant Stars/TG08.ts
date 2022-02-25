import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Alcremie",
		fr: "Charmilly",
		es: "Alcremie",
		it: "Alcremie",
		pt: "Alcremie",
		de: "Pokusan"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Milcery",
		fr: "Crèmy",
		es: "Milcery",
		it: "Milcery",
		pt: "Milcery",
		de: "Hokumil"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Additional Order",
			fr: "Supplément",
			es: "Pedido Adicional",
			it: "Altra Ordinazione",
			pt: "Pedido Extra",
			de: "Zusätzliche Bestellung"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your turn does not end when you use Café Master.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, lorsque vous utilisez Barista, votre tour ne se termine pas.",
			es: "Mientras este Pokémon esté en el Puesto Activo, tu turno no termina cuando uses Barista.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il tuo turno non finisce quando usi Barista.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, o seu turno não acabará quando você usar Mestre do Café.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, endet dein Zug nicht, wenn du Barista einsetzt."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rainbow Flavor",
			fr: "Goût Arc-en-Ciel",
			es: "Sabor Arcoíris",
			it: "Gusto Arcobaleno",
			pt: "Sabor de Arco-íris",
			de: "Regenbogengeschmack"
		},

		effect: {
			en: "This attack does 40 more damage for each type of basic Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque type d'Énergie de base attachée à tous vos Pokémon.",
			es: "Este ataque hace 40 puntos de daño más por cada tipo de Energía Básica unida a todos tus Pokémon.",
			it: "Questo attacco infligge 40 danni in più per ogni tipo di Energia base assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada tipo de Energia básica ligada a todos os seus Pokémon.",
			de: "Diese Attacke fügt für jeden an alle deine Pokémon angelegten Basis-Energietyp 40 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card
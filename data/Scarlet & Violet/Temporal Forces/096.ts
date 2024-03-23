import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Great Tusk",
		fr: "Fort-Ivoire",
		es: "Colmilargo",
		it: "Grandizanne",
		pt: "Presa Grande"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Lunge Out",
			fr: "Allonger",
			es: "Arremeter",
			it: "Affondo Lungo",
			pt: "Bote"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Wrathful Charge",
			fr: "Charge Furieuse",
			es: "Carga Iracunda",
			it: "Carica Furibonda",
			pt: "Colisão Enfurecida"
		},

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 80 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 80 puntos de daño más.",
			it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 80 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 80 pontos de dano a mais."
		},

		damage: "80+"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card
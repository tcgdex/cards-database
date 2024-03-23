import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Azumarill",
		fr: "Azumarill",
		es: "Azumarill",
		it: "Azumarill",
		pt: "Azumarill"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Play Rough",
			fr: "Câlinerie",
			es: "Carantoña",
			it: "Carineria",
			pt: "Jogo Duro"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Power Tackle",
			fr: "Tacle Puissant",
			es: "Placaje Poderoso",
			it: "Forzazione",
			pt: "Investida Poderosa"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Miraidon ex",
		fr: "Miraidon-ex",
		es: "Miraidon ex",
		it: "Miraidon-ex",
		pt: "Miraidon ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Psychic"],

		name: {
			en: "Repulsion Bolt",
			fr: "Écrou Répulsion",
			es: "Rayo Aversión",
			it: "Lampo Respingente",
			pt: "Raio de Repulsão"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 100 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais."
		},

		damage: "60+"
	}, {
		cost: ["Lightning", "Psychic", "Colorless"],

		name: {
			en: "Cyber Drive",
			fr: "Conduite Cybernétique",
			es: "Impulso Cibernético",
			it: "Propulsione Cibernetica",
			pt: "Ciberdireção"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Cyber Drive.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Conduite Cybernétique.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Impulso Cibernético.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Propulsione Cibernetica.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Ciberdireção."
		},

		damage: 220
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
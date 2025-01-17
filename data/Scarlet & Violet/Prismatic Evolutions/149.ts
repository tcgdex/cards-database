import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon ex",
		fr: "Aquali-ex",
		es: "Vaporeon ex",
		pt: "Vaporeon ex",
		it: "Vaporeon-ex",
		de: "Aquana-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Severe Squall",
			fr: "Rafale Violente",
			es: "Ráfaga Inclemente",
			pt: "Ventania Intensa",
			it: "Burrasca Violenta",
			de: "Starker Schwall"
		},

		effect: {
			en: "This attack does 60 damage to each of your opponent's Pokémon ex. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Cette attaque inflige 60 dégâts à chacun des Pokémon-ex de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			es: "Este ataque hace 60 puntos de daño a cada uno de los Pokémon ex de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			pt: "Este ataque causa 60 pontos de dano a cada um dos Pokémon ex do seu oponente. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			it: "Questo attacco infligge 60 danni a ciascuno dei Pokémon-ex del tuo avversario. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			de: "Diese Attacke fügt jedem Pokémon-ex deines Gegners 60 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert."
		}
	}, {
		cost: ["Fire", "Water", "Lightning"],

		name: {
			en: "Aquamarine",
			fr: "Aigue-Marine",
			es: "Aguamarina",
			pt: "Água-marinha",
			it: "Acquamarina",
			de: "Aquamarin"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 280
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon",
		fr: "Noctali",
		es: "Umbreon",
		pt: "Umbreon",
		it: "Umbreon",
		de: "Nachtara"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Feint Attack",
			fr: "Feinte",
			es: "Finta",
			pt: "Ataque Dissimulado",
			it: "Finta",
			de: "Finte"
		},

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance, or by any effects on that Pokémon.",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur ce Pokémon.",
			es: "Este ataque hace 50 puntos de daño a uno de los Pokémon de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en ese Pokémon.",
			pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. O dano deste ataque não é afetado por Fraqueza, Resistência ou por quaisquer outros efeitos naquele Pokémon.",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente su quel Pokémon.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf jenem Pokémon nicht verändert."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Pitch-Black Blade",
			fr: "Lame Fuligineuse",
			es: "Tajo Oscuridad",
			pt: "Lâmina do Breu",
			it: "Lama Buiopesto",
			de: "Pechschwarze Klinge"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 140
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "matazo"
}

export default card
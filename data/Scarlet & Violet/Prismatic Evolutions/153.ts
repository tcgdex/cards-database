import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon ex",
		fr: "Voltali-ex",
		es: "Jolteon ex",
		pt: "Jolteon ex",
		it: "Jolteon-ex",
		de: "Blitza-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Flashing Spear",
			fr: "Lance Aveuglante",
			es: "Lanza Reluciente",
			pt: "Lança Lampejante",
			it: "Lancia Abbagliante",
			de: "Leuchtender Speer"
		},

		effect: {
			en: "You may discard up to 2 Basic Energy from your Benched Pokémon. This attack does 90 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser jusqu'à 2 Énergies de base de vos Pokémon de Banc. Cette attaque inflige 90 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar hasta 2 Energías Básicas de tus Pokémon en Banca. Este ataque hace 90 puntos de daño más por cada carta que hayas descartado de esta manera.",
			pt: "Você pode descartar até 2 Energias Básicas dos seus Pokémon no Banco. Este ataque causa 90 pontos de dano a mais para cada carta descartada desta forma.",
			it: "Puoi scartare fino a due Energie base dai tuoi Pokémon in panchina. Questo attacco infligge 90 danni in più per ogni carta che hai scartato in questo modo.",
			de: "Du kannst bis zu 2 Basis-Energien von Pokémon auf deiner Bank auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 90 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}, {
		cost: ["Fire", "Water", "Lightning"],

		name: {
			en: "Dravite",
			fr: "Dravite",
			es: "Dravita",
			pt: "Dravita",
			it: "Dravite",
			de: "Dravit"
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

	retreat: 0,
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card
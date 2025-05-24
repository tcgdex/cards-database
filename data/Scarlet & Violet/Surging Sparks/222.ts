import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Flygon ex",
		fr: "Libégon-ex",
		es: "Flygon ex",
		it: "Flygon-ex",
		pt: "Flygon ex",
		de: "Libelldra-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Reversing Storm",
			fr: "Tempête Inversion",
			es: "Tormenta Inversión",
			it: "Tempesta d'Inversione",
			pt: "Tempestade Reversa",
			de: "Umkehrsturm"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 130
	}, {
		cost: ["Water", "Fighting", "Metal"],

		name: {
			en: "Sonic Peridot",
			fr: "Péridot Sonique",
			es: "Peridoto Sónico",
			it: "Peridoto Sonico",
			pt: "Peridoto Sônico",
			de: "Schall-Peridot"
		},

		effect: {
			en: "This attack does 100 damage to each of your opponent's Pokémon ex and Pokémon V. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Cette attaque inflige 100 dégâts à chacun des Pokémon-ex et Pokémon-V de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			es: "Este ataque hace 100 puntos de daño a cada uno de los Pokémon ex y Pokémon V de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			it: "Questo attacco infligge 100 danni a ciascuno dei Pokémon-ex e dei Pokémon-V del tuo avversario. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			pt: "Este ataque causa 100 pontos de dano a cada um dos Pokémon ex e Pokémon V do seu oponente. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			de: "Diese Attacke fügt jedem Pokémon-ex und Pokémon-V deines Gegners 100 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert."
		}
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics"
}

export default card

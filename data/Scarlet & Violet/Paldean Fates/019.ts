import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [26],
	set: Set,

	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Electrical Grounding",
			fr: "Prise de Terre",
			es: "Toma de Tierra",
			it: "Messa a Terra Elettrica",
			pt: "Aterramento Elétrico",
			de: "Elektrische Erdung"
		},

		effect: {
			en: "When 1 of your Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, you may move a Lightning Energy from that Pokémon to this Pokémon.",
			fr: "Lorsque l'un de vos Pokémon est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, vous pouvez déplacer une Énergie Lightning de ce Pokémon-là vers celui-ci.",
			es: "Cuando uno de tus Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, puedes mover 1 Energía Lightning de ese Pokémon a este Pokémon.",
			it: "Quando uno dei tuoi Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, puoi spostare un'Energia Lightning da quel Pokémon a questo Pokémon.",
			pt: "Quando 1 dos seus Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, você poderá mover uma Energia Lightning daquele Pokémon para este Pokémon.",
			de: "Wenn 1 deiner Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, kannst du 1 Lightning-Energie von jenem Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
			es: "Trueno",
			it: "Tuono",
			pt: "Trovão",
			de: "Donner"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	}
}

export default card

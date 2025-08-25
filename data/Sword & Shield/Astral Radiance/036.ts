import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [340],
	set: Set,

	name: {
		en: "Whiscash",
		fr: "Barbicha",
		es: "Whiscash",
		it: "Whiscash",
		pt: "Whiscash",
		de: "Welsar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Barboach",
		fr: "Barloche",
		es: "Barboach",
		it: "Barboach",
		pt: "Barboach",
		de: "Schmerbe"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
			es: "Disparo Lodo",
			it: "Colpodifango",
			pt: "Tiro de Lama",
			de: "Lehmschuss"
		},

		damage: 80
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Thrash",
			fr: "Mania",
			es: "Golpe",
			it: "Colpo",
			pt: "Castigar",
			de: "Fuchtler"
		},

		effect: {
			en: "Flip a coin. If tails, this Pokémon also does 60 damage to itself. If heads, this attack does 60 more damage.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 60 dégâts. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 60 puntos de daño a sí mismo. Si sale cara, este ataque hace 60 puntos de daño más.",
			it: "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 60 danni a se stesso. Se esce testa, questo attacco infligge 60 danni in più.",
			pt: "Jogue 1 moeda. Se sair coroa, este Pokémon também causará 60 pontos de dano a si mesmo. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 60 Schadenspunkte zu. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658544,
		tcgplayer: 272236
	}
}

export default card
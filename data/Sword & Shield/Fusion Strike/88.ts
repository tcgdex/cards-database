import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [101],
	set: Set,

	name: {
		en: "Electrode",
		fr: "Électrode",
		es: "Electrode",
		it: "Electrode",
		pt: "Electrode",
		de: "Lektrobal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		en: "It stores an overflowing amount of electric energy inside its body. Even a small shock makes it explode."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sonic Boom",
			fr: "Sonic Boom",
			de: "Ultraschall",
			es: "Bomba Sónica",
			pt: "Explosão Sônica",
			it: "Sonicboom"
		},

		damage: 40,

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			de: "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert.",
			es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Explosion",
			fr: "Explosion",
			de: "Explosion",
			es: "Explosión",
			pt: "Explosão",
			it: "Esplosione"
		},

		damage: 120,

		effect: {
			en: "This Pokémon also does 90 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 90 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 90 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 90 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 90 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 90 danni a se stesso."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582413,
		tcgplayer: 253244
	}
}

export default card
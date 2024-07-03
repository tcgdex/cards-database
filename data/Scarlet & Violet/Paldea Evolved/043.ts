import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		fr: "Léviator",
		en: "Gyarados",
		es: "Gyarados",
		it: "Gyarados",
		pt: "Gyarados",
		de: "Garados"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Tempête Vengeresse",
			en: "Revengeful Storm",
			es: "Tormenta Vengativa",
			it: "Tempesta Vendicativa",
			pt: "Tempestade Vingativa",
			de: "Rachesturm"
		},

		effect: {
			fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
			en: "If you have more Prize cards remaining than your opponent, this attack does 100 more damage.",
			es: "Si te quedan más cartas de Premio que a tu rival, este ataque hace 100 puntos de daño más.",
			it: "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 100 danni in più.",
			pt: "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			fr: "Charge Folle",
			en: "Berserker Tackle",
			es: "Placaje Locura",
			it: "Assalto Brado",
			pt: "Investida Frenética",
			de: "Berserkerwut"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			en: "This Pokémon also does 50 damage to itself.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 200
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Reshiram ex",
		fr: "Reshiram-ex",
		de: "Reshiram-ex",
		it: "Reshiram-ex",
		pt: "Reshiram ex",
		es: "Reshiram ex",
		'es-mx': "Reshiram ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			it: "Lacerazione",
			pt: "Talho",
			es: "Cuchillada",
			'es-mx': "Cuchillada"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Blazing Burst",
			fr: "Explosion Enflammée",
			de: "Flammen-Ausbruch",
			it: "Scoppiofiamma",
			pt: "Explosão Flamejante",
			es: "Explosión Abrasadora",
			'es-mx': "Estallido Abrasador"
		},

		effect: {
			en: "This attack does 50 more damage for each Prize card your opponent has taken. Discard an Energy from this Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée. Défaussez une Énergie de ce Pokémon.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 50 Schadenspunkte mehr zu. Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Questo attacco infligge 50 danni in più per ogni carta Premio presa dal tuo avversario. Scarta un'Energia da questo Pokémon.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou. Descarte uma Energia deste Pokémon.",
			es: "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya cogido tu rival. Descarta 1 Energía de este Pokémon.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya tomado tu rival. Descarta 1 Energía de este Pokémon."
		},

		damage: "130+"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card
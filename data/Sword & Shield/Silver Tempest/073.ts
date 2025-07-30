import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [308],
	set: Set,

	name: {
		en: "Medicham",
		fr: "Charmina",
		es: "Medicham",
		it: "Medicham",
		pt: "Medicham",
		de: "Meditalis"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Meditite",
		fr: "Méditikka",
		es: "Meditite",
		it: "Meditite",
		pt: "Meditite",
		de: "Meditie"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Chakra Awakening",
			fr: "Ouverture de Chakra",
			es: "Despertar Chakra",
			it: "Risveglio Chakra",
			pt: "Despertar dos Chakras",
			de: "Erwachende Chakras"
		},

		effect: {
			en: "If you have exactly 4 cards in your hand, this Pokémon's attacks cost ColorlessColorlessColorless less.",
			fr: "S'il vous reste exactement 4 cartes en main, les attaques de ce Pokémon coûtent ColorlessColorlessColorless de moins.",
			es: "Si tienes exactamente 4 cartas en tu mano, los ataques de este Pokémon cuestan ColorlessColorlessColorless menos.",
			it: "Se hai esattamente quattro carte in mano, il costo degli attacchi di questo Pokémon è ridotto di ColorlessColorlessColorless.",
			pt: "Se você tiver exatamente 4 cartas na sua mão, os ataques deste Pokémon custarão ColorlessColorlessColorless a menos.",
			de: "Wenn du genau 4 Karten auf deiner Hand hast, verringern sich die Kosten der Attacken dieses Pokémon um ColorlessColorlessColorless."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Vigorous Kick",
			fr: "Coup de Pied Vigoureux",
			es: "Patada Vigorosa",
			it: "Calcio Vigoroso",
			pt: "Chute Vigoroso",
			de: "Energischer Tritt"
		},

		effect: {
			en: "If your opponent has any Pokémon VMAX in play, this attack does 90 more damage.",
			fr: "Si votre adversaire a au moins un Pokémon-VMAX en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si tu rival tiene algún Pokémon VMAX en juego, este ataque hace 90 puntos de daño más.",
			it: "Se il tuo avversario ha dei Pokémon-VMAX in gioco, questo attacco infligge 90 danni in più.",
			pt: "Se o seu oponente tiver algum Pokémon VMAX em jogo, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn dein Gegner mindestens 1 Pokémon-VMAX im Spiel hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682120
	}
}

export default card

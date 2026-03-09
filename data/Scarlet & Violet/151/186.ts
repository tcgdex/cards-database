import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		fr: "Feunard-ex",
		en: "Ninetales ex",
		es: "Ninetales ex",
		it: "Ninetales-ex",
		pt: "Ninetales ex",
		de: "Vulnona-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	evolveFrom: {
		fr: "Goupix",
		en: "Vulpix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Canicule",
			en: "Heat Wave",
			es: "Onda Ígnea",
			it: "Ondacalda",
			pt: "Onda de Calor",
			de: "Hitzewelle"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			en: "Your opponent's Active Pokémon is now Burned.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			fr: "Flammes Miroir",
			en: "Mirrored Flames",
			es: "Llamas Reflejadas",
			it: "Fiamme Riflesse",
			pt: "Chamas Espelhadas",
			de: "Spiegelflammen"
		},

		effect: {
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 140 dégâts supplémentaires.",
			en: "If you have the same number of cards in your hand as your opponent, this attack does 140 more damage.",
			es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 140 puntos de daño más.",
			it: "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 140 danni in più.",
			pt: "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 140 pontos de dano a mais.",
			de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 140 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "PLANETA Tsuji",

	thirdParty: {
		cardmarket: 733781
	}
}

export default card
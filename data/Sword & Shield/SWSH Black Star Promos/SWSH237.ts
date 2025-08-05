import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Typhlosion de Hisui V",
		de: "Hisui-Tornupto V",
		es: "Typhlosion de Hisui V",
		pt: "Typhlosion de Hisui V",
		it: "Typhlosion di Hisui V",
		en: "Hisuian Typhlosion V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			fr: "Roussi",
			de: "Versengung",
			es: "Quemadura",
			pt: "Chamuscada",
			it: "Scottata",
			en: "Singe"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			fr: "Flamme Pétrifiante",
			de: "Angsteinflößende Flamme",
			es: "Llama Petrificante",
			pt: "Chama Petrificante",
			it: "Fiamma Pietrificante",
			en: "Petrifying Flame"
		},

		effect: {
			fr: "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			de: "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck.",
			es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			pt: "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
			it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 650947
	}
}

export default card
import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [157],
	set: Set,

	name: {
		'fr-fr': "Typhlosion de Hisui V",
		'de-de': "Hisui-Tornupto V",
		'es-es': "Typhlosion de Hisui V",
		'pt-br': "Typhlosion de Hisui V",
		'it-it': "Typhlosion di Hisui V",
		'en-us': "Hisuian Typhlosion V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'fr-fr': "Roussi",
			'de-de': "Versengung",
			'es-es': "Quemadura",
			'pt-br': "Chamuscada",
			'it-it': "Scottata",
			'en-us': "Singe"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'en-us': "Your opponent's Active Pokémon is now Burned."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'fr-fr': "Flamme Pétrifiante",
			'de-de': "Angsteinflößende Flamme",
			'es-es': "Llama Petrificante",
			'pt-br': "Chama Petrificante",
			'it-it': "Fiamma Pietrificante",
			'en-us': "Petrifying Flame"
		},

		effect: {
			'fr-fr': "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck.",
			'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			'pt-br': "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
			'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 650947
	}
}

export default card

import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [157],
	set: Set,

	name: {
		'en-us': "Hisuian Typhlosion V",
		'fr-fr': "Typhlosion de Hisui V",
		'es-es': "Typhlosion de Hisui V",
		'it-it': "Typhlosion di Hisui V",
		'pt-br': "Typhlosion de Hisui V",
		'de-de': "Hisui-Tornupto V"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'en-us': "Singe",
			'fr-fr': "Roussi",
			'es-es': "Quemadura",
			'it-it': "Scottata",
			'pt-br': "Chamuscada",
			'de-de': "Versengung"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Petrifying Flame",
			'fr-fr': "Flamme Pétrifiante",
			'es-es': "Llama Petrificante",
			'it-it': "Fiamma Pietrificante",
			'pt-br': "Chama Petrificante",
			'de-de': "Angsteinflößende Flamme"
		},

		effect: {
			'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			'fr-fr': "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			'pt-br': "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
			'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck."
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


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658612,
				tcgplayer: 272254
			}
		},
	],
}

export default card

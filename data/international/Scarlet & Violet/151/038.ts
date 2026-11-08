import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		'fr-fr': "Feunard-ex",
		'en-us': "Ninetales ex",
		'es-es': "Ninetales ex",
		'it-it': "Ninetales-ex",
		'pt-br': "Ninetales ex",
		'de-de': "Vulnona-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Goupix",
		'en-us': "Vulpix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Canicule",
			'en-us': "Heat Wave",
			'es-es': "Onda Ígnea",
			'it-it': "Ondacalda",
			'pt-br': "Onda de Calor",
			'de-de': "Hitzewelle"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Flammes Miroir",
			'en-us': "Mirrored Flames",
			'es-es': "Llamas Reflejadas",
			'it-it': "Fiamme Riflesse",
			'pt-br': "Chamas Espelhadas",
			'de-de': "Spiegelflammen"
		},

		effect: {
			'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 140 dégâts supplémentaires.",
			'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 140 more damage.",
			'es-es': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 140 puntos de daño más.",
			'it-it': "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 140 danni in più.",
			'pt-br': "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 140 pontos de dano a mais.",
			'de-de': "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 140 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733633,
				tcgplayer: 516072,
				cardtrader: 261100
			}
		},
	],

	suffix: "ex",
	illustrator: "kawayoo",

	
}

export default card

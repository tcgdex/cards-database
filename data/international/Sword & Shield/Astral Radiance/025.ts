import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [485],
	set: Set,

	name: {
		'en-us': "Heatran V",
		'fr-fr': "Heatran V",
		'es-es': "Heatran V",
		'it-it': "Heatran V",
		'pt-br': "Heatran V",
		'de-de': "Heatran V"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Heat Burn",
			'fr-fr': "Chaleur Brûlante",
			'es-es': "Quemazón",
			'it-it': "Brucia Calore",
			'pt-br': "Queimadura por Calor",
			'de-de': "Brandwunde"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Magma Fall",
			'fr-fr': "Chute Magma",
			'es-es': "Cascada de Magma",
			'it-it': "Magmacaduta",
			'pt-br': "Queda de Magma",
			'de-de': "Magmafall"
		},

		effect: {
			'en-us': "If you have a Stadium in play, this attack does 90 more damage.",
			'fr-fr': "Si vous avez un Stade en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si tienes un Estadio en juego, este ataque hace 90 puntos de daño más.",
			'it-it': "Se hai in gioco una carta Stadio, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você tiver um Estádio em jogo, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658528,
				tcgplayer: 272225
			}
		},
	],
}

export default card

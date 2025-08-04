import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Heatran V",
		fr: "Heatran V",
		es: "Heatran V",
		it: "Heatran V",
		pt: "Heatran V",
		de: "Heatran V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Heat Burn",
			fr: "Chaleur Brûlante",
			es: "Quemazón",
			it: "Brucia Calore",
			pt: "Queimadura por Calor",
			de: "Brandwunde"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Magma Fall",
			fr: "Chute Magma",
			es: "Cascada de Magma",
			it: "Magmacaduta",
			pt: "Queda de Magma",
			de: "Magmafall"
		},

		effect: {
			en: "If you have a Stadium in play, this attack does 90 more damage.",
			fr: "Si vous avez un Stade en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si tienes un Estadio en juego, este ataque hace 90 puntos de daño más.",
			it: "Se hai in gioco una carta Stadio, questo attacco infligge 90 danni in più.",
			pt: "Se você tiver um Estádio em jogo, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658528,
		tcgplayer: 272225
	}
}

export default card

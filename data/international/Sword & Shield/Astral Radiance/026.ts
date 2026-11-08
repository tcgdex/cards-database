import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [485],
	set: Set,

	name: {
		'en-us': "Heatran VMAX",
		'fr-fr': "Heatran VMAX",
		'es-es': "Heatran VMAX",
		'it-it': "Heatran VMAX",
		'pt-br': "Heatran VMAX",
		'de-de': "Heatran VMAX"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Heatran V",
		'fr-fr': "Heatran-V",
		'es-es': "Heatran V",
		'it-it': "Heatran-V",
		'pt-br': "Heatran V",
		'de-de': "Heatran-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Magma Gain",
			'fr-fr': "Gain Magma",
			'es-es': "Ganancia Magma",
			'it-it': "Magmacura",
			'pt-br': "Ganho de Magma",
			'de-de': "Magmagewinn"
		},

		effect: {
			'en-us': "Once during your turn, if you have a Stadium in play, you may heal 50 damage from this Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si vous avez un Stade en jeu, vous pouvez soigner 50 dégâts de ce Pokémon.",
			'es-es': "Una vez durante tu turno, si tienes un Estadio en juego, puedes curar 50 puntos de daño a este Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, se hai in gioco una carta Stadio, puoi curare questo Pokémon da 50 danni.",
			'pt-br': "Uma vez durante o seu turno, se você tiver um Estádio em jogo, você poderá curar 50 pontos de dano deste Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn du eine Stadionkarte im Spiel hast, kannst du 50 Schadenspunkte bei diesem Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Max Heat Burst",
			'fr-fr': "Éruptiomax",
			'es-es': "Maxiestallido Ígneo",
			'it-it': "Dynascoppio Rovente",
			'pt-br': "Explosão de Calor Max",
			'de-de': "Dyna-Hitze-Detonation"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658529,
				tcgplayer: 272226
			}
		},
	],
}

export default card

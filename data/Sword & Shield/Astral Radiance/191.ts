import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Heatran VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],

	evolveFrom: {
		en: "Heatran V",
		fr: "Heatran-V",
		es: "Heatran V",
		it: "Heatran-V",
		pt: "Heatran V",
		de: "Heatran-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Magma Gain",
			fr: "Gain Magma",
			es: "Ganancia Magma",
			it: "Magmacura",
			pt: "Ganho de Magma",
			de: "Magmagewinn"
		},

		effect: {
			en: "Once during your turn, if you have a Stadium in play, you may heal 50 damage from this Pokémon.",
			fr: "Une fois pendant votre tour, si vous avez un Stade en jeu, vous pouvez soigner 50 dégâts de ce Pokémon.",
			es: "Una vez durante tu turno, si tienes un Estadio en juego, puedes curar 50 puntos de daño a este Pokémon.",
			it: "Una sola volta durante il tuo turno, se hai in gioco una carta Stadio, puoi curare questo Pokémon da 50 danni.",
			pt: "Uma vez durante o seu turno, se você tiver um Estádio em jogo, você poderá curar 50 pontos de dano deste Pokémon.",
			de: "Einmal während deines Zuges, wenn du eine Stadionkarte im Spiel hast, kannst du 50 Schadenspunkte bei diesem Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Max Heat Burst",
			fr: "Éruptiomax",
			es: "Maxiestallido Ígneo",
			it: "Dynascoppio Rovente",
			pt: "Explosão de Calor Max",
			de: "Dyna-Hitze-Detonation"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
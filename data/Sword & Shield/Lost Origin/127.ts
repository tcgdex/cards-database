import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Stunfisk",
		fr: "Limonde de Galar",
		es: "Stunfisk de Galar",
		it: "Stunfisk di Galar",
		pt: "Stunfisk de Galar",
		de: "Galar-Flunschlik"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Field Trap",
			fr: "Piège de Terrain",
			es: "Trampa de Campo",
			it: "Trappola in Campo",
			pt: "Armadilha de Campo",
			de: "Feldfalle"
		},

		effect: {
			en: "If your opponent has a Stadium in play, discard it. If you discarded a Stadium in this way, discard 2 Energy from your opponent's Active Pokémon.",
			fr: "Si votre adversaire a un Stade en jeu, défaussez-le. Si vous avez défaussé un Stade de cette façon, défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
			es: "Si tu rival tiene un Estadio en juego, descártalo. Si has descartado un Estadio de esta manera, descarta 2 Energías del Pokémon Activo de tu rival.",
			it: "Se il tuo avversario ha una carta Stadio in gioco, scartala. Se hai scartato una carta Stadio in questo modo, scarta due Energie dal Pokémon attivo del tuo avversario.",
			pt: "Se o seu oponente tiver um Estádio em jogo, descarte-o. Se você descartou 1 Estádio desta forma, descarte 2 Energias do Pokémon Ativo do seu oponente.",
			de: "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel. Wenn du auf diese Weise eine Stadionkarte auf seinen Ablagestapel gelegt hast, lege 2 Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card
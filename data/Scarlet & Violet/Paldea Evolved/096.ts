import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [770],
	set: Set,

	name: {
		fr: "Trépassable",
		en: "Palossand",
		es: "Palossand",
		it: "Palossand",
		pt: "Palossand",
		de: "Colossand"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	evolveFrom: {
		fr: "Bacabouh",
		en: "Sandygast",
		es: "Sandygast",
		it: "Sandygast",
		pt: "Sandygast",
		de: "Sankabuh"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Tir Effrayant",
			en: "Spooky Shot",
			es: "Disparo Embrujado",
			it: "Colpomistero",
			pt: "Tiro Assustador",
			de: "Spukschuss"
		},

		damage: 40
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Puissance Tellurique",
			en: "Earthen Power",
			es: "Poder Terrestre",
			it: "Terrapotenza",
			pt: "Poder Terrestre",
			de: "Erdenkraft"
		},

		effect: {
			fr: "Si vous avez un Stade en jeu, cette attaque inflige 80 dégâts supplémentaires.",
			en: "If you have a Stadium in play, this attack does 80 more damage.",
			es: "Si tienes un Estadio en juego, este ataque hace 80 puntos de daño más.",
			it: "Se hai in gioco una carta Stadio, questo attacco infligge 80 danni in più.",
			pt: "Se você tiver um Estádio em jogo, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "HYOGONOSUKE",

	thirdParty: {
		cardmarket: 715571
	}
}

export default card
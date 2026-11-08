import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [770],
	set: Set,

	name: {
		'fr-fr': "Trépassable",
		'en-us': "Palossand",
		'es-es': "Palossand",
		'it-it': "Palossand",
		'pt-br': "Palossand",
		'de-de': "Colossand"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Bacabouh",
		'en-us': "Sandygast",
		'es-es': "Sandygast",
		'it-it': "Sandygast",
		'pt-br': "Sandygast",
		'de-de': "Sankabuh"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Tir Effrayant",
			'en-us': "Spooky Shot",
			'es-es': "Disparo Embrujado",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador",
			'de-de': "Spukschuss"
		},

		damage: 40
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Puissance Tellurique",
			'en-us': "Earthen Power",
			'es-es': "Poder Terrestre",
			'it-it': "Terrapotenza",
			'pt-br': "Poder Terrestre",
			'de-de': "Erdenkraft"
		},

		effect: {
			'fr-fr': "Si vous avez un Stade en jeu, cette attaque inflige 80 dégâts supplémentaires.",
			'en-us': "If you have a Stadium in play, this attack does 80 more damage.",
			'es-es': "Si tienes un Estadio en juego, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai in gioco una carta Stadio, questo attacco infligge 80 danni in più.",
			'pt-br': "Se você tiver um Estádio em jogo, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
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
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715571,
				tcgplayer: 497511,
				cardtrader: 248725
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715571,
				tcgplayer: 497511,
				cardtrader: 248725
			}
		},
	],

	illustrator: "HYOGONOSUKE",

	description: {
		'en-us': "The terrifying Palossand drags smaller Pokémon into its sandy body. Once its victims are trapped, it drains them of their vitality whenever it pleases.",
	},
}

export default card

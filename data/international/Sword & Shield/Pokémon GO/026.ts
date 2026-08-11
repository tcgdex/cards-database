import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [768],
	set: Set,

	name: {
		'en-us': "Golisopod",
		'fr-fr': "Sarmuraï",
		'es-es': "Golisopod",
		'it-it': "Golisopod",
		'pt-br': "Golisopod",
		'de-de': "Tectass"
	},

	illustrator: "otumami",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'it-it': "Wimpod",
		'pt-br': "Wimpod",
		'de-de': "Reißlaus"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "First Impression",
			'fr-fr': "Escarmouche",
			'es-es': "Escaramuza",
			'it-it': "Schermaglia",
			'pt-br': "Primeira Impressão",
			'de-de': "Überrumpler"
		},

		effect: {
			'en-us': "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 90 more damage.",
			'fr-fr': "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 90 puntos de daño más.",
			'it-it': "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon foi movido do seu Banco para o Campo Ativo durante este turno, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It will do anything to win, taking advantage of every opening and finishing opponents off with the small claws on its front legs.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665258,
				tcgplayer: 274459
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665258,
				tcgplayer: 274459
			}
		},
	],
}

export default card

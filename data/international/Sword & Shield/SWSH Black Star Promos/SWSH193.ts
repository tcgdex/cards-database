import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [862],
	set: Set,

	name: {
		'fr-fr': "Ixon de Galar",
		'de-de': "Galar-Barrikadax",
		'es-es': "Obstagoon de Galar",
		'pt-br': "Obstagoon de Galar",
		'it-it': "Obstagoon di Galar",
		'en-us': "Galarian Obstagoon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		'fr-fr': "Linéon de Galar",
		'de-de': "Galar-Geradaks",
		'es-es': "Linoone de Galar",
		'pt-br': "Linoone de Galar",
		'it-it': "Linoone di Galar",
		'en-us': "Galarian Linoone"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'fr-fr': "Coup de Pied Furieux",
			'de-de': "Randalekick",
			'es-es': "Patada Furiosa",
			'pt-br': "Chute Furioso",
			'it-it': "Calcio Infuriato",
			'en-us': "Rampaging Kick"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies {D} de ce Pokémon.",
			'de-de': "Lege 2 {D}-Energien von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 2 Energías {D} de este Pokémon.",
			'pt-br': "Descarte 2 Energias {D} deste Pokémon.",
			'it-it': "Scarta due Energie {D} da questo Pokémon.",
			'en-us': "Discard 2 {D} Energy from this Pokémon."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",

	description: {
		'en-us': "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch."
	},

	thirdParty: {
		cardmarket: 516319
	}
}

export default card

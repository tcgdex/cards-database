import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [862],
	set: Set,

	name: {
		fr: "Ixon de Galar",
		de: "Galar-Barrikadax",
		es: "Obstagoon de Galar",
		pt: "Obstagoon de Galar",
		it: "Obstagoon di Galar",
		en: "Galarian Obstagoon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Linéon de Galar",
		de: "Galar-Geradaks",
		es: "Linoone de Galar",
		pt: "Linoone de Galar",
		it: "Linoone di Galar",
		en: "Galarian Linoone"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			fr: "Coup de Pied Furieux",
			de: "Randalekick",
			es: "Patada Furiosa",
			pt: "Chute Furioso",
			it: "Calcio Infuriato",
			en: "Rampaging Kick"
		},

		effect: {
			fr: "Défaussez 2 Énergies {D} de ce Pokémon.",
			de: "Lege 2 {D}-Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 2 Energías {D} de este Pokémon.",
			pt: "Descarte 2 Energias {D} deste Pokémon.",
			it: "Scarta due Energie {D} da questo Pokémon.",
			en: "Discard 2 {D} Energy from this Pokémon."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "E",

	description: {
		en: "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch."
	},

	thirdParty: {
		cardmarket: 516319
	}
}

export default card
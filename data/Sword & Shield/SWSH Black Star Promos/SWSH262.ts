import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		fr: "Dracaufeu VSTAR",
		de: "Glurak VSTAR",
		es: "Charizard V-ASTRO",
		pt: "Charizard V-ASTRO",
		it: "Charizard V ASTRO",
		en: "Charizard VSTAR"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],

	evolveFrom: {
		fr: "Dracaufeu-V",
		de: "Glurak-V",
		es: "Charizard V",
		pt: "Charizard V",
		it: "Charizard-V",
		en: "Charizard V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			fr: "Feu Explosif",
			de: "Explosives Feuer",
			es: "Fuego Explosivo",
			pt: "Explosão de Fogo",
			it: "Fuoco Esplosivo",
			en: "Explosive Fire"
		},

		effect: {
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
			en: "If this Pokémon has any damage counters on it, this attack does 100 more damage."
		},

		damage: "130+"
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			fr: "Brasier Star",
			de: "Sternengroßbrand",
			es: "Llamarada Astro",
			pt: "Incêndio Astral",
			it: "Astro Fiammata",
			en: "Star Blaze"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			es: "Descarta 2 Energías de este Pokémon. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			pt: "Descarte 2 Energias deste Pokémon (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			it: "Scarta due Energie da questo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			en: "Discard 2 Energy from this Pokémon. (You can't use more than 1 VSTAR Power in a game.)"
		},

		damage: 320
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card
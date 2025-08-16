import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		en: "Charizard VSTAR",
		fr: "Dracaufeu VSTAR",
		es: "Charizard V-ASTRO",
		it: "Charizard V ASTRO",
		pt: "Charizard V-ASTRO",
		de: "Glurak VSTAR"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],

	evolveFrom: {
		en: "Charizard V",
		fr: "Dracaufeu-V",
		es: "Charizard V",
		it: "Charizard-V",
		pt: "Charizard V",
		de: "Glurak-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Explosive Fire",
			fr: "Feu Explosif",
			es: "Fuego Explosivo",
			it: "Fuoco Esplosivo",
			pt: "Explosão de Fogo",
			de: "Explosives Feuer"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack does 100 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "130+"
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			en: "Star Blaze",
			fr: "Brasier Star",
			es: "Llamarada Astro",
			it: "Astro Fiammata",
			pt: "Incêndio Astral",
			de: "Sternengroßbrand"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Défaussez 2 Énergies de ce Pokémon. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Descarta 2 Energías de este Pokémon. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Scarta due Energie da questo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Descarte 2 Energias deste Pokémon (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		},

		damage: 320
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608462,
		tcgplayer: 263893
	}
}

export default card
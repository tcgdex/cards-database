import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'fr-fr': "Dracaufeu VSTAR",
		'de-de': "Glurak VSTAR",
		'es-es': "Charizard V-ASTRO",
		'pt-br': "Charizard V-ASTRO",
		'it-it': "Charizard V ASTRO",
		'en-us': "Charizard VSTAR"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],

	evolveFrom: {
		'fr-fr': "Dracaufeu-V",
		'de-de': "Glurak-V",
		'es-es': "Charizard V",
		'pt-br': "Charizard V",
		'it-it': "Charizard-V",
		'en-us': "Charizard V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'fr-fr': "Feu Explosif",
			'de-de': "Explosives Feuer",
			'es-es': "Fuego Explosivo",
			'pt-br': "Explosão de Fogo",
			'it-it': "Fuoco Esplosivo",
			'en-us': "Explosive Fire"
		},

		effect: {
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
			'en-us': "If this Pokémon has any damage counters on it, this attack does 100 more damage."
		},

		damage: "130+"
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			'fr-fr': "Brasier Star",
			'de-de': "Sternengroßbrand",
			'es-es': "Llamarada Astro",
			'pt-br': "Incêndio Astral",
			'it-it': "Astro Fiammata",
			'en-us': "Star Blaze"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			'es-es': "Descarta 2 Energías de este Pokémon. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'pt-br': "Descarte 2 Energias deste Pokémon (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'it-it': "Scarta due Energie da questo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			'en-us': "Discard 2 Energy from this Pokémon. (You can't use more than 1 VSTAR Power in a game.)"
		},

		damage: 320
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 674370
	}
}

export default card

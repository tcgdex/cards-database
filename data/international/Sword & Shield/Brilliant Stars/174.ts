import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'en-us': "Charizard VSTAR",
		'fr-fr': "Dracaufeu VSTAR",
		'es-es': "Charizard V-ASTRO",
		'it-it': "Charizard V ASTRO",
		'pt-br': "Charizard V-ASTRO",
		'de-de': "Glurak VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Charizard V",
		'fr-fr': "Dracaufeu-V",
		'es-es': "Charizard V",
		'it-it': "Charizard-V",
		'pt-br': "Charizard V",
		'de-de': "Glurak-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Explosive Fire",
			'fr-fr': "Feu Explosif",
			'es-es': "Fuego Explosivo",
			'it-it': "Fuoco Esplosivo",
			'pt-br': "Explosão de Fogo",
			'de-de': "Explosives Feuer"
		},

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, this attack does 100 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "130+"
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Star Blaze",
			'fr-fr': "Brasier Star",
			'es-es': "Llamarada Astro",
			'it-it': "Astro Fiammata",
			'pt-br': "Incêndio Astral",
			'de-de': "Sternengroßbrand"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon. (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Descarta 2 Energías de este Pokémon. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Scarta due Energie da questo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			'pt-br': "Descarte 2 Energias deste Pokémon (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
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


	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 608720,
				tcgplayer: 263893
			}
		},
	],
}

export default card

import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [483],
	set: Set,

	name: {
		'fr-fr': "Dialga Originel VSTAR",
		'de-de': "Ur-Dialga VSTAR",
		'es-es': "Dialga Origen V-ASTRO",
		'pt-br': "Dialga Forma Origem V-ASTRO",
		'it-it': "Dialga Originale V ASTRO",
		'en-us': "Origin Forme Dialga VSTAR"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],

	evolveFrom: {
		'fr-fr': "Dialga Originel-V",
		'de-de': "Ur-Dialga-V",
		'es-es': "Dialga Origen V",
		'pt-br': "Dialga Forma Origem V",
		'it-it': "Dialga Originale-V",
		'en-us': "Origin Forme Dialga V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Explosion Métallique",
			'de-de': "Metallexplosion",
			'es-es': "Explosión Metálica",
			'pt-br': "Explosão de Metal",
			'it-it': "Metalbomba",
			'en-us': "Metal Blast"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {M} attachée à ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {M}-Energie 40 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía {M} unida a este Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia {M} ligada a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia {M} assegnata a questo Pokémon.",
			'en-us': "This attack does 40 more damage for each {M} Energy attached to this Pokémon."
		},

		damage: "40+"
	}, {
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"],

		name: {
			'fr-fr': "Chrono Star",
			'de-de': "Sternenzeit",
			'es-es': "Astro Cronos",
			'pt-br': "Cronologia Astral",
			'it-it': "Astro Tempo",
			'en-us': "Star Chronos"
		},

		effect: {
			'fr-fr': "Jouez de nouveau après ce tour. (Omettez le Contrôle Pokémon.)(Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'de-de': "Du bist nach diesem Zug erneut am Zug. (Überspringe den Pokémon-Check.) (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			'es-es': "Toma otro turno después de este. (Sáltate el Chequeo Pokémon).(No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'pt-br': "Jogue novamente após este turno (pule o Checape Pokémon). (Você não pode usar mais de 1 Poder V-ASTRO por partida.)",
			'it-it': "Dopo questo turno, giocane un altro. Salta il controllo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			'en-us': "Take another turn after this one. (Skip Pokémon Checkup.) (You can't use more than 1 VSTAR Power in a game.)"
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669484
	}
}

export default card

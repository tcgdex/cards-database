import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [483],
	set: Set,

	name: {
		'en-us': "Origin Forme Dialga VSTAR",
		'fr-fr': "Dialga Originel VSTAR",
		'es-es': "Dialga Origen V-ASTRO",
		'it-it': "Dialga Originale V ASTRO",
		'pt-br': "Dialga Forma Origem V-ASTRO",
		'de-de': "Ur-Dialga VSTAR"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Origin Forme Dialga V",
		'fr-fr': "Dialga Originel-V",
		'es-es': "Dialga Origen V",
		'it-it': "Dialga Originale-V",
		'pt-br': "Dialga Forma Origem V",
		'de-de': "Ur-Dialga-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Metal Blast",
			'fr-fr': "Explosion Métallique",
			'es-es': "Explosión Metálica",
			'it-it': "Metalbomba",
			'pt-br': "Explosão de Metal",
			'de-de': "Metallexplosion"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each Metal Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía Metal unida a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia Metal assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia Metal ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Metal-Energie 40 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Star Chronos",
			'fr-fr': "Chrono Star",
			'es-es': "Astro Cronos",
			'it-it': "Astro Tempo",
			'pt-br': "Cronologia Astral",
			'de-de': "Sternenzeit"
		},

		effect: {
			'en-us': "Take another turn after this one. (Skip Pokémon Checkup.) (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Jouez de nouveau après ce tour. (Omettez le Contrôle Pokémon.)(Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Toma otro turno después de este. (Sáltate el Chequeo Pokémon).(No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Dopo questo turno, giocane un altro. Salta il controllo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			'pt-br': "Jogue novamente após este turno (pule o Checape Pokémon). (Você não pode usar mais de 1 Poder V-ASTRO por partida.)",
			'de-de': "Du bist nach diesem Zug erneut am Zug. (Überspringe den Pokémon-Check.) (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691948,
				tcgplayer: 478099
			}
		},
	],
}

export default card

import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [483],
	set: Set,

	name: {
		fr: "Dialga Originel VSTAR",
		de: "Ur-Dialga VSTAR",
		es: "Dialga Origen V-ASTRO",
		pt: "Dialga Forma Origem V-ASTRO",
		it: "Dialga Originale V ASTRO",
		en: "Origin Forme Dialga VSTAR"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],

	evolveFrom: {
		fr: "Dialga Originel-V",
		de: "Ur-Dialga-V",
		es: "Dialga Origen V",
		pt: "Dialga Forma Origem V",
		it: "Dialga Originale-V",
		en: "Origin Forme Dialga V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Explosion Métallique",
			de: "Metallexplosion",
			es: "Explosión Metálica",
			pt: "Explosão de Metal",
			it: "Metalbomba",
			en: "Metal Blast"
		},

		effect: {
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {M} attachée à ce Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {M}-Energie 40 Schadenspunkte mehr zu.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía {M} unida a este Pokémon.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia {M} ligada a este Pokémon.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia {M} assegnata a questo Pokémon.",
			en: "This attack does 40 more damage for each {M} Energy attached to this Pokémon."
		},

		damage: "40+"
	}, {
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"],

		name: {
			fr: "Chrono Star",
			de: "Sternenzeit",
			es: "Astro Cronos",
			pt: "Cronologia Astral",
			it: "Astro Tempo",
			en: "Star Chronos"
		},

		effect: {
			fr: "Jouez de nouveau après ce tour. (Omettez le Contrôle Pokémon.)(Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			de: "Du bist nach diesem Zug erneut am Zug. (Überspringe den Pokémon-Check.) (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			es: "Toma otro turno después de este. (Sáltate el Chequeo Pokémon).(No puedes usar más de 1 Poder V-ASTRO en una partida).",
			pt: "Jogue novamente após este turno (pule o Checape Pokémon). (Você não pode usar mais de 1 Poder V-ASTRO por partida.)",
			it: "Dopo questo turno, giocane un altro. Salta il controllo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			en: "Take another turn after this one. (Skip Pokémon Checkup.) (You can't use more than 1 VSTAR Power in a game.)"
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669484
	}
}

export default card
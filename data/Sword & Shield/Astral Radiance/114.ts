import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Origin Forme Dialga VSTAR",
		fr: "Dialga Originel VSTAR",
		es: "Dialga Origen V-ASTRO",
		it: "Dialga Originale V ASTRO",
		pt: "Dialga Forma Origem V-ASTRO",
		de: "Ur-Dialga VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],

	evolveFrom: {
		en: "Origin Forme Dialga V",
		fr: "Dialga Originel-V",
		es: "Dialga Origen V",
		it: "Dialga Originale-V",
		pt: "Dialga Forma Origem V",
		de: "Ur-Dialga-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Metal Blast",
			fr: "Explosion Métallique",
			es: "Explosión Metálica",
			it: "Metalbomba",
			pt: "Explosão de Metal",
			de: "Metallexplosion"
		},

		effect: {
			en: "This attack does 40 more damage for each Metal Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía Metal unida a este Pokémon.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia Metal assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia Metal ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Metal-Energie 40 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Star Chronos",
			fr: "Chrono Star",
			es: "Astro Cronos",
			it: "Astro Tempo",
			pt: "Cronologia Astral",
			de: "Sternenzeit"
		},

		effect: {
			en: "Take another turn after this one. (Skip Pokémon Checkup.) (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Jouez de nouveau après ce tour. (Omettez le Contrôle Pokémon.)(Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Toma otro turno después de este. (Sáltate el Chequeo Pokémon).(No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Dopo questo turno, giocane un altro. Salta il controllo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Jogue novamente após este turno (pule o Checape Pokémon). (Você não pode usar mais de 1 Poder V-ASTRO por partida.)",
			de: "Du bist nach diesem Zug erneut am Zug. (Überspringe den Pokémon-Check.) (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658775,
		tcgplayer: 272339
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo VSTAR",
		fr: "Mewtwo VSTAR",
		es: "Mewtwo V-ASTRO",
		it: "Mewtwo V ASTRO",
		pt: "Mewtwo V-ASTRO",
		de: "Mewtu VSTAR"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],

	evolveFrom: {
		en: "Mewtwo V",
		fr: "Mewtwo-V",
		es: "Mewtwo V",
		it: "Mewtwo-V",
		pt: "Mewtwo V",
		de: "Mewtu-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psy Purge",
			fr: "Nettoyage Psy",
			es: "Psicopurga",
			it: "Abbagliante Psico",
			pt: "Expurgação Psíquica",
			de: "Psiwerfer"
		},

		effect: {
			en: "Discard up to 3 Psychic Energy from your Pokémon. This attack does 90 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu'à 3 Énergies Psychic de vos Pokémon. Cette attaque inflige 90 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta hasta 3 Energías Psychic de tus Pokémon. Este ataque hace 90 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Scarta fino a tre Energie Psychic dai tuoi Pokémon. Questo attacco infligge 90 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte até 3 Energias Psychic dos seus Pokémon. Este ataque causa 90 pontos de dano para cada carta descartada desta forma.",
			de: "Lege bis zu 3 Psychic-Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 90 Schadenspunkte zu."
		},

		damage: "90×"
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Star Raid",
			fr: "Raid Star",
			es: "Incursión Astro",
			it: "Astro Raid",
			pt: "Reide Astral",
			de: "Sternen-Raid"
		},

		effect: {
			en: "This attack does 120 damage to each of your opponent's Pokémon V. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Cette attaque inflige 120 dégâts à chacun des Pokémon-V de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Este ataque hace 120 puntos de daño a cada uno de los Pokémon V de tu rival. Este daño no se ve afectado por Debilidad o Resistencia. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Questo attacco infligge 120 danni a ciascuno dei Pokémon-V del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Este ataque causa 120 pontos de dano a cada um dos Pokémon V do seu oponente. Este dano não é afetado por Fraqueza ou Resistência (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Diese Attacke fügt jedem Pokémon-V deines Gegners 120 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card
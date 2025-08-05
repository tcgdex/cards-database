import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Lucario VSTAR",
		de: "Lucario VSTAR",
		es: "Lucario V-ASTRO",
		pt: "Lucario V-ASTRO",
		it: "Lucario V ASTRO",
		en: "Lucario VSTAR"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Lucario-V",
		de: "Lucario-V",
		es: "Lucario V",
		pt: "Lucario V",
		it: "Lucario-V",
		en: "Lucario V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Poing Combatif",
			de: "Kampfknöchel",
			es: "Nudillo Luchador",
			pt: "Punho de Luta",
			it: "Pugnolotta",
			en: "Fighting Knuckle"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 120 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 120 pontos de dano a mais.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 120 danni in più.",
			en: "If your opponent's Active Pokémon is a Pokémon V, this attack does 120 more damage."
		},

		damage: "120+"
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			fr: "Aura Star",
			de: "Aurastern",
			es: "Astro Aura",
			pt: "Aura Astral",
			it: "Astro Aura",
			en: "Aura Star"
		},

		effect: {
			fr: "Cette attaque inflige 70 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 70 Schadenspunkte zu. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			es: "Este ataque hace 70 puntos de daño por cada Energía unida a todos los Pokémon de tu rival. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			pt: "Este ataque causa 70 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			it: "Questo attacco infligge 70 danni per ogni Energia assegnata ai Pokémon del tuo avversario. Non puoi usare più di un Potere V ASTRO a partita.",
			en: "This attack does 70 damage for each Energy attached to all of your opponent's Pokémon. (You can't use more than 1 VSTAR Power in a game.)"
		},

		damage: "70×"
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 606784
	}
}

export default card
import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		'fr-fr': "Lucario VSTAR",
		'de-de': "Lucario VSTAR",
		'es-es': "Lucario V-ASTRO",
		'pt-br': "Lucario V-ASTRO",
		'it-it': "Lucario V ASTRO",
		'en-us': "Lucario VSTAR"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],

	evolveFrom: {
		'fr-fr': "Lucario-V",
		'de-de': "Lucario-V",
		'es-es': "Lucario V",
		'pt-br': "Lucario V",
		'it-it': "Lucario-V",
		'en-us': "Lucario V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Poing Combatif",
			'de-de': "Kampfknöchel",
			'es-es': "Nudillo Luchador",
			'pt-br': "Punho de Luta",
			'it-it': "Pugnolotta",
			'en-us': "Fighting Knuckle"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 120 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 120 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 120 pontos de dano a mais.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 120 danni in più.",
			'en-us': "If your opponent's Active Pokémon is a Pokémon V, this attack does 120 more damage."
		},

		damage: "120+"
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Aura Star",
			'de-de': "Aurastern",
			'es-es': "Astro Aura",
			'pt-br': "Aura Astral",
			'it-it': "Astro Aura",
			'en-us': "Aura Star"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 70 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 70 Schadenspunkte zu. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			'es-es': "Este ataque hace 70 puntos de daño por cada Energía unida a todos los Pokémon de tu rival. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'pt-br': "Este ataque causa 70 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'it-it': "Questo attacco infligge 70 danni per ogni Energia assegnata ai Pokémon del tuo avversario. Non puoi usare più di un Potere V ASTRO a partita.",
			'en-us': "This attack does 70 damage for each Energy attached to all of your opponent's Pokémon. (You can't use more than 1 VSTAR Power in a game.)"
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 606600,
		tcgplayer: 475642
	}
}

export default card

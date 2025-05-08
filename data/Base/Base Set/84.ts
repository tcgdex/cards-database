import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "PlusPower",
		pt: "PlusPower",
		fr: "PlusPower",
		de: "PlusPower"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach PlusPower to your Active Pokémon. At the end of your turn, discard PlusPower. If this Pokémon's attack does damage to the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon.",
		pt: "Anexe PlusPower ao seu Pokémon Ativo. No final do seu turno, descarte PlusPower. Se o ataque deste Pokémon causar dano ao Pokémon Defensor (após aplicar Fraqueza e Resistência), o ataque causa mais 10 de dano ao Pokémon Defensor.",
		fr: "Attachez PlusPower à votre Pokémon actif. À la fin de votre tour, défaussez PlusPower. Si l'attaque de ce Pokémon inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), l'attaque inflige 10 dégâts supplémentaires au Pokémon Défenseur.",
		de: "Lege PlusPower auf Deinem aktiven Pokémon ab, und entferne die Karte am Ende Deines Zugs wieder. Fügt deine Attacke dem verteidigenden Pokémon Schaden zu (nachdem Schwäche und Resistenz abgerechnet wurden), so erleidet das verteidigende Pokémon 10 weitere Schadenspunkte."
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Cresselia",
		fr: "Cresselia",
		es: "Cresselia",
		it: "Cresselia",
		pt: "Cresselia",
		de: "Cresselia"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Healing Pirouette",
			fr: "Pirouette Apaisante",
			es: "Pirueta Curativa",
			it: "Curoetta",
			pt: "Pirueta Curativa",
			de: "Heilender Reigen"
		},

		effect: {
			en: "Heal 20 damage from each of your Pokémon.",
			fr: "Soignez 20 dégâts de chacun de vos Pokémon.",
			es: "Cura 20 puntos de daño a cada uno de tus Pokémon.",
			it: "Cura ciascuno dei tuoi Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano de cada um dos seus Pokémon.",
			de: "Heile 20 Schadenspunkte bei jedem deiner Pokémon."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			en: "Crescent Purge",
			fr: "Nettoyage Falciforme",
			es: "Purga Creciente",
			it: "Mezzaluna Purificante",
			pt: "Expiação Crescente",
			de: "Mondsichelbefreiung"
		},

		effect: {
			en: "You may turn 1 of your face-down Prize cards face up. If you do, this attack does 80 more damage. (That Prize card remains face up for the rest of the game.)",
			fr: "Vous pouvez retourner l'une de vos cartes Récompense (actuellement face cachée). Dans ce cas, cette attaque inflige 80 dégâts supplémentaires. (Cette carte Récompense reste face découverte pour le reste de la partie.)",
			es: "Puedes poner 1 de tus cartas de Premio que están boca abajo boca arriba. Si lo haces, este ataque hace 80 puntos de daño más. (Esa carta de Premio permanecerá boca arriba durante el resto de la partida).",
			it: "Puoi girare a faccia in su una delle tue carte Premio coperte. Se lo fai, questo attacco infligge 80 danni in più. Quella carta Premio resta a faccia in su per il resto della partita.",
			pt: "Você pode virar para cima 1 das suas cartas de Prêmio viradas para baixo. Se fizer isto, este ataque causará 80 pontos de dano a mais. (Aquela carta de Prêmio permanecerá virada para cima pelo resto do jogo.)",
			de: "Du kannst 1 deiner verdeckten Preiskarten aufdecken. Wenn du das machst, fügt diese Attacke 80 Schadenspunkte mehr zu. (Jene Preiskarte bleibt für den Rest des Spiels aufgedeckt.)"
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	}
}

export default card

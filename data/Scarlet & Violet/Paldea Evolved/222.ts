import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Tyranocif",
		en: "Tyranitar",
		es: "Tyranitar",
		it: "Tyranitar",
		pt: "Tyranitar",
		de: "Despotar"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Débâcle",
			en: "Rout",
			es: "Esparcir",
			it: "Stanamento",
			pt: "Efeito Cascata",
			de: "Verheerung"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			fr: "Montagne Effroyable",
			en: "Dread Mountain",
			es: "Montaña Pavorosa",
			it: "Monte della Paura",
			pt: "Montanha do Pavor",
			de: "Berg des Grauens"
		},

		effect: {
			fr: "Défaussez les 4 cartes du dessus de votre deck.",
			en: "Discard the top 4 cards of your deck.",
			es: "Descarta las 4 primeras cartas de tu baraja.",
			it: "Scarta le prime quattro carte del tuo mazzo.",
			pt: "Descarte as 4 cartas de cima do seu baralho.",
			de: "Lege die obersten 4 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 230
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card
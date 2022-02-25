import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
		es: "Sigilyph",
		it: "Sigilyph",
		pt: "Sigilyph",
		de: "Symvolara"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Tri Recharge",
			fr: "Triple Recharge",
			es: "Triple Recarga",
			it: "Ricarica Tripla",
			pt: "Trirrecarga",
			de: "Dreifache Aufladung"
		},

		effect: {
			en: "Flip 3 coins. Attach a number of basic Energy cards up to the number of heads from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Lancez 3 pièces. Attachez comme il vous plaît de votre pile de défausse à vos Pokémon de Banc un nombre de cartes Énergie de base inférieur ou égal au nombre de côtés face obtenus.",
			es: "Lanza 3 monedas. Une una cantidad de cartas de Energía Básica, igual o inferior al número de caras que te hayan salido, de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			it: "Lancia tre volte una moneta. Assegna ai tuoi Pokémon in panchina un numero di carte Energia base dalla tua pila degli scarti uguale o inferiore al numero di volte in cui è uscito testa nel modo che preferisci.",
			pt: "Jogue 3 moedas. Ligue um número de cartas de Energia básica da sua pilha de descarte até o número de caras aos seus Pokémon no Banco como desejar.",
			de: "Wirf 3 Münzen. Lege bis zu so viele Basis-Energiekarten, wie du Kopf geworfen hast, aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			it: "Psichico",
			pt: "Psíquico",
			de: "Psychokinese"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card
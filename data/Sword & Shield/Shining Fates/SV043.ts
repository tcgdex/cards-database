import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wattapik",
		en: "Pincurchin",
		es: "Pincurchin",
		it: "Pincurchin",
		pt: "Pincurchin",
		de: "Britzigel"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Épines Choquantes",
			en: "Shocking Needles",
			es: "Púas Electrizantes",
			it: "Spine Fulminanti",
			pt: "Espinhos Chocantes",
			de: "Schockende Stacheln"
		},

		effect: {
			fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face. Si vous obtenez au moins 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip 4 coins. This attack does 30 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Paralyzed.",
			es: "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara. Si sale cara en por lo menos 2 de ellas, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa. Se esce almeno due volte testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 4 moedas. Este ataque causa 30 pontos de dano para cada cara. Se pelo menos 2 delas saírem cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu. Wenn mindestens 2 Münzen Kopf zeigen, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: "30×",
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "It feeds on seaweed, using its teeth to scrape it off rocks. Electric current flows from the tips of its spines."
	}
}

export default card

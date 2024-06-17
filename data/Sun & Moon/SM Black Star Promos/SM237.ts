import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		en: "Leafeon",
		fr: "Phyllali",
		es: "Leafeon",
		it: "Leafeon",
		pt: "Leafeon",
		de: "Folipurba"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Aromax",
			fr: "Parfum Régénérant",
			es: "Aromax",
			it: "Curessenza",
			pt: "Aromax",
			de: "Aromax"
		},

		effect: {
			en: "Heal all damage from 1 of your Benched Pokémon.",
			fr: "Soignez tous les dégâts de l’un de vos Pokémon de Banc.",
			es: "Cura todos los puntos de daño a 1 de tus Pokémon en Banca.",
			it: "Cura uno dei tuoi Pokémon in panchina da tutti i danni.",
			pt: "Cure todo o dano de 1 dos seus Pokémon no Banco.",
			de: "Heile allen Schaden bei 1 Pokémon auf deiner Bank."
		},

		cost: ["Grass"]
	}, {
		name: {
			en: "Leaf Blade",
			fr: "Lame-Feuille",
			es: "Hoja Aguda",
			it: "Fendifoglia",
			pt: "Lâmina de Folha",
			de: "Laubklinge"
		},

		damage: "80+",

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card
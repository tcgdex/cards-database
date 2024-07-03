import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Salarsen",
		en: "Toxtricity",
		es: "Toxtricity",
		it: "Toxtricity",
		pt: "Toxtricity",
		de: "Riffex"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Groz'Yeux",
			en: "Leer",
			es: "Malicioso",
			it: "Fulmisguardo",
			pt: "Encarar",
			de: "Silberblick"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			fr: "Mélange Tonitruant",
			en: "Loud Mix",
			es: "Mezcla Ruidosa",
			it: "Mixaforte",
			pt: "Mixagem Estrondosa",
			de: "Lauter Mix"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque type différent de Pokémon sur votre Banc.",
			en: "This attack does 30 more damage for each different type of Pokémon on your Bench.",
			es: "Este ataque hace 30 puntos de daño más por cada tipo de Pokémon diferente en tu Banca.",
			it: "Questo attacco infligge 30 danni in più per ogni Pokémon di tipo diverso nella tua panchina.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada tipo diferente de Pokémon no seu Banco.",
			de: "Diese Attacke fügt für jeden verschiedenen Pokémon-Typ auf deiner Bank 30 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [601],
	set: Set,

	name: {
		en: "Klinklang",
		fr: "Cliticlic",
		es: "Klinklang",
		it: "Klinklang",
		pt: "Klinklang",
		de: "Klikdiklak"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		en: "Klang",
		fr: "Clic",
		es: "Klang",
		it: "Klang",
		pt: "Klang",
		de: "Kliklak"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Gear Wall",
			fr: "Mur d'Engrenage",
			es: "Muro Engranaje",
			it: "Muro Meccanico",
			pt: "Parede de Engrenagens",
			de: "Schutzgetriebe"
		},

		effect: {
			en: "Your Basic Pokémon take 20 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			fr: "Vos Pokémon de base subissent 20 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques de los Pokémon de tu rival hacen 20 puntos de daño menos a tus Pokémon Básicos (después de aplicar Debilidad y Resistencia).",
			it: "I tuoi Pokémon Base subiscono 20 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Os seus Pokémon Básicos recebem 20 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
			de: "Deinen Basis-Pokémon werden durch Attacken von Pokémon deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Tumbling Attack",
			fr: "Attaque Trébuchante",
			es: "Ataque Tambaleante",
			it: "Attacco Capriola",
			pt: "Ataque Cambalhota",
			de: "Taumler"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 90 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 90 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 90 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 90 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608650,
		tcgplayer: 263824
	}
}

export default card
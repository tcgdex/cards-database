import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		en: "Morpeko",
		fr: "Morpeko",
		es: "Morpeko",
		it: "Morpeko",
		pt: "Morpeko",
		de: "Morpeko"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Peko Blaster",
			fr: "Peko Explosif",
			es: "Peko Explosión",
			it: "Esplosione Peko",
			pt: "Pekonador",
			de: "Peko-Blaster"
		},

		effect: {
			en: "You can use this attack only if 1 of your Dedenne used Dede-Short during your last turn. This attack does 60 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Vous ne pouvez utiliser cette attaque que si l'un de vos Dedenne a utilisé Dede-Court-Circuit lors de votre dernier tour. Cette attaque inflige 60 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Puedes usar este ataque solo si 1 de tus Dedenne usó Dede-Cortocircuito durante tu último turno. Este ataque hace 60 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Puoi usare questo attacco solo se uno dei tuoi Dedenne ha usato Cortocircuito Dede durante il tuo ultimo turno. Questo attacco infligge 60 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Você só pode usar este ataque se 1 dos seus Dedenne usou Dedecurto durante o seu último turno. Este ataque causa 60 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Du kannst diese Attacke nur einsetzen, wenn 1 deiner Dedenne während deines letzten Zuges Dede-Kurzschluss eingesetzt hat. Diese Attacke fügt jedem Pokémon deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682163,
		tcgplayer: 451770
	}
}

export default card
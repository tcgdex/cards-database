import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [106],
	set: Set,

	name: {
		fr: "Kicklee",
		en: "Hitmonlee",
		es: "Hitmonlee",
		it: "Hitmonlee",
		pt: "Hitmonlee",
		de: "Kicklee"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Coup de Pied Tournoyant",
			en: "Twister Kick",
			es: "Patada Torbellino",
			it: "Calciociclone",
			pt: "Chute Twister",
			de: "Orkankick"
		},

		effect: {
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Switch this Pokémon with 1 of your Benched Pokémon.",
			es: "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). Cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Scambia questo Pokémon con uno della tua panchina.",
			pt: "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.) Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			fr: "Balayage",
			en: "Low Kick",
			es: "Patada Baja",
			it: "Colpo Basso",
			pt: "Rasteira",
			de: "Fußkick"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Hitoshi Ariga",

	thirdParty: {
		cardmarket: 733688
	}
}

export default card
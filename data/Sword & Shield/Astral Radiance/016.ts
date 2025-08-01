import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Lilligant",
		fr: "Fragilady de Hisui",
		es: "Lilligant de Hisui",
		it: "Lilligant di Hisui",
		pt: "Lilligant de Hisui",
		de: "Hisui-Dressella"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
		es: "Petilil",
		it: "Petilil",
		pt: "Petilil",
		de: "Lilminip"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Twister Lutz",
			fr: "Lutz Tournoyant",
			es: "Tornado Lutz",
			it: "Lutz Tornado",
			pt: "Tornado Rodopiante",
			de: "Lutzwirbel"
		},

		effect: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Scambia questo Pokémon con uno della tua panchina.",
			pt: "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			es: "Paso Hoja",
			it: "Passofoglia",
			pt: "Passo de Folha",
			de: "Blattschritt"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658510
	}
}

export default card

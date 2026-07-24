import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
		es: "Mandibuzz",
		'es-mx': "Mandibuzz",
		de: "Grypheldis",
		it: "Mandibuzz",
		pt: "Mandibuzz"
	},

	illustrator: "Nisota Niso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [630],
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Vullaby"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bone Sniper",
			fr: "Sniper Osseux",
			es: "Francotirador Óseo",
			'es-mx': "Huesopuntería",
			de: "Knochenschütze",
			it: "Ossocecchino",
			pt: "Atirador de Ossos"
		},

		cost: ["Darkness"],

		effect: {
			en: "This attack does 70 damage to 1 of your opponent's Pokémon that has any Special Energy attached. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 70 dégâts à l'un des Pokémon de votre adversaire auxquels au moins une Énergie spéciale est attachée. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 70 puntos de daño a uno de los Pokémon de tu rival que tengan alguna Energía Especial unida. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 70 puntos de daño a 1 de los Pokémon de tu rival que tengan alguna Energía Especial unida. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners, an das mindestens 1 Spezial-Energie angelegt ist, 70 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 70 danni a uno dei Pokémon del tuo avversario che ha delle Energie speciali assegnate. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 70 pontos de dano a 1 dos Pokémon do seu oponente que tem alguma Energia Especial ligada a ele. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		name: {
			en: "Blasting Wind",
			fr: "Vent Impitoyable",
			es: "Vientos Explosivos",
			'es-mx': "Viento Explosivo",
			de: "Peitschender Wind",
			it: "Vento Distruttivo",
			pt: "Vendaval Avassalador"
		},

		cost: ["Darkness", "Darkness", "Colorless"],

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895835,
				tcgplayer: 704807
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895835,
				tcgplayer: 704807
			}
		},
	],
}

export default card

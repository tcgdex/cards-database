import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [823],
	set: Set,

	name: {
		'en-us': "Hop's Corviknight",
		'fr-fr': "Corvaillus de Nabil",
		'es-es': "Corviknight de Paul",
		'de-de': "Hops Krarmor",
		'it-it': "Corviknight di Hop",
		'pt-br': "Corviknight do Lupo",
		'es-mx': "Corviknight de Paul"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Hop's Corvisquire",
		'fr-fr': "Bleuseille de Nabil",
		'es-es': "Corvisquire de Paul",
		'de-de': "Hops Kranoviz",
		'it-it': "Corvisquire di Hop",
		'pt-br': "Corvisquire do Lupo",
		'es-mx': "Corvisquire de Paul"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Shoot Through",
			'fr-fr': "Passer à Travers",
			'es-es': "Cruzar Rápido",
			'de-de': "Durchschießen",
			'it-it': "Sparainmezzo",
			'pt-br': "Tiro Vazante",
			'es-mx': "Atravesar"
		},

		effect: {
			'en-us': "This attack also does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Steel Wing",
			'fr-fr': "Ailes d'Acier",
			'es-es': "Ala de Acero",
			'de-de': "Stahlflügel",
			'it-it': "Alacciaio",
			'pt-br': "Asa de Aço",
			'es-mx': "Ala de Acero"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 60 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 60 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 60 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 60 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 60 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "GIDORA",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817260,
				tcgplayer: 623535
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817260,
				tcgplayer: 623535
			}
		},
	],
}

export default card

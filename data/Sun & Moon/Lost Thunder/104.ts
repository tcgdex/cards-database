import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Meloetta",
		fr: "Meloetta",
		es: "Meloetta",
		it: "Meloetta",
		pt: "Meloetta",
		de: "Meloetta"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		648,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sing",
				fr: "Berceuse",
				es: "Canto",
				it: "Canto",
				pt: "Canção",
				de: "Gesang"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Miracle Harmony",
				fr: "Harmonie Miraculeuse",
				es: "Armonía Milagrosa",
				it: "Armonia Miracolosa",
				pt: "Harmonia Milagrosa",
				de: "Wunderharmonie"
			},
			effect: {
				en: "Flip a coin for each of your Pokémon in play that has the Sing attack. This attack does 10 damage for each heads to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce pour chacun de vos Pokémon en jeu ayant l’attaque Berceuse. Cette attaque inflige 10 dégâts pour chaque côté face à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Lanza 1 moneda por cada uno de tus Pokémon en juego que tenga el ataque Canto. Este ataque hace 10 puntos de daño por cada cara a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Lancia una moneta per ogni tuo Pokémon in gioco che abbia l’attacco Canto. Questo attacco infligge 10 danni ogni volta che esce testa a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Jogue 1 moeda para cada um dos seus Pokémon em jogo que tiver o ataque Canção. Este ataque causa 10 pontos de dano para cada cara a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Wirf 1 Münze für jedes deiner Pokémon im Spiel, das die Attacke Gesang hat. Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte pro Kopf zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365741,
		tcgplayer: 178917
	}
}

export default card

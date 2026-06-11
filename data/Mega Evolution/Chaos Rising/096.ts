import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		en: "Tauros",
		fr: "Tauros",
		es: "Tauros",
		'es-mx': "Tauros",
		de: "Tauros",
		it: "Tauros",
		pt: "Tauros"
	},

	illustrator: "Tsuyoshi Nagano",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Target Together",
			fr: "Cible Commune",
			es: "Objetivo Común",
			'es-mx': "Objetivo Común",
			de: "Gemeinsames Ziel",
			it: "Bersaglio Collettivo",
			pt: "Mirando Junto"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Choose 1 of your opponent's Pokémon and flip a coin for each of your Pokémon in play that has \"Tauros\" in its name. This attack does 50 damage to the chosen Pokémon for each heads. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez l'un des Pokémon de votre adversaire, puis lancez une pièce pour chacun de vos Pokémon en jeu ayant \" Tauros \" dans leur nom. Cette attaque inflige 50 dégâts au Pokémon choisi pour chaque côté face. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Elige 1 de los Pokémon de tu rival y lanza 1 moneda por cada uno de tus Pokémon en juego que tengan \"Tauros\" en su nombre. Este ataque hace 50 puntos de daño al Pokémon elegido por cada cara. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Elige 1 de los Pokémon de tu rival y lanza 1 moneda por cada uno de tus Pokémon en juego que tengan \"Tauros\" en su nombre. Este ataque hace 50 puntos de daño al Pokémon elegido por cada cara. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Wähle 1 Pokémon deines Gegners und wirf 1 Münze für jedes deiner Pokémon im Spiel, bei dem \"Tauros\" zum Namen gehört. Diese Attacke fügt dem gewählten Pokémon 50 Schadenspunkte pro Kopf zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Scegli uno dei Pokémon del tuo avversario e lancia una moneta per ciascuno dei tuoi Pokémon in gioco che ha \"Tauros\" nel nome. Questo attacco infligge 50 danni al Pokémon che hai scelto ogni volta che esce testa. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Escolha 1 dos Pokémon do seu oponente e jogue uma moeda para cada um dos seus Pokémon em jogo que tem \"Tauros\" em seu nome. Este ataque causa 50 pontos de dano ao Pokémon escolhido para cada cara. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886488,
				tcgplayer: 693553
			}
		},
	],
}

export default card

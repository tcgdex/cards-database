import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [703],
	set: Set,

	name: {
		'en-us': "Steven's Carbink",
		'fr-fr': "Strassie de Pierre",
		'de-de': "Troys Rocara",
		'it-it': "Carbink di Rocco",
		'es-es': "Carbink de Máximo",
		'pt-br': "Carbink do Steven",
		'es-mx': "Carbink de Steven"
	},


	illustrator: "Ligton",

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Stone Palace",
			'fr-fr': "Palais Rocheux",
			'de-de': "Palast aus Stein",
			'it-it': "Palazzo di Pietra",
			'es-es': "Palacio de Peñas",
			'pt-br': "Palácio de Pedra",
			'es-mx': "Palacio de Piedra"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, all of your Steven's Pokémon take 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). The effect of Stone Palace doesn't stack.",
			'fr-fr': "Tant que ce Pokémon est sur votre Banc, tous vos Pokémon de Pierre subissent 30 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance). L'effet de Palais Rocheux n'est pas cumulable.",
			'de-de': "Solange sich dieses Pokémon auf deiner Bank befindet, werden allen deinen Troys Pokémon durch Attacken von Pokémon deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Der Effekt von Palast aus Stein stapelt sich nicht.",
			'it-it': "Fintanto che questo Pokémon è nella tua panchina, i tuoi Pokémon di Rocco subiscono 30 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza. L'effetto di Palazzo di Pietra non è cumulabile.",
			'es-es': "Mientras este Pokémon esté en tu Banca, los ataques de los Pokémon de tu rival hacen 30 puntos de daño menos a todos tus Pokémon de Máximo (después de aplicar Debilidad y Resistencia). El efecto de Palacio de Peñas no se acumula.",
			'pt-br': "Enquanto este Pokémon estiver no seu Banco, todos os seus Pokémon do Steven receberão 30 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência). O efeito de Palácio de Pedra não acumula.",
			'es-mx': "Mientras este Pokémon esté en tu Banca, los ataques de los Pokémon de tu rival hacen 30 puntos de daño menos a todos tus Pokémon de Steven (después de aplicar Debilidad y Resistencia). El efecto de Palacio de Piedra no se acumula."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'de-de': "Magischer Schuss",
			'it-it': "Magicolpo",
			'es-es': "Disparo Mágico",
			'pt-br': "Tiro Mágico",
			'es-mx': "Disparo Mágico"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825960,
				tcgplayer: 632896
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825960,
				tcgplayer: 632896
			}
		},
	],
}

export default card

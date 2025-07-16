import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Steven's Carbink",
		fr: "Strassie de Pierre",
		de: "Troys Rocara",
		it: "Carbink di Rocco",
		es: "Carbink de Máximo",
		pt: "Carbink do Steven",
		'es-mx': "Carbink de Steven"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Stone Palace",
			fr: "Palais Rocheux",
			de: "Palast aus Stein",
			it: "Palazzo di Pietra",
			es: "Palacio de Peñas",
			pt: "Palácio de Pedra",
			'es-mx': "Palacio de Piedra"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, all of your Steven's Pokémon take 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). The effect of Stone Palace doesn't stack.",
			fr: "Tant que ce Pokémon est sur votre Banc, tous vos Pokémon de Pierre subissent 30 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance). L'effet de Palais Rocheux n'est pas cumulable.",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, werden allen deinen Troys Pokémon durch Attacken von Pokémon deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Der Effekt von Palast aus Stein stapelt sich nicht.",
			it: "Fintanto che questo Pokémon è nella tua panchina, i tuoi Pokémon di Rocco subiscono 30 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza. L'effetto di Palazzo di Pietra non è cumulabile.",
			es: "Mientras este Pokémon esté en tu Banca, los ataques de los Pokémon de tu rival hacen 30 puntos de daño menos a todos tus Pokémon de Máximo (después de aplicar Debilidad y Resistencia). El efecto de Palacio de Peñas no se acumula.",
			pt: "Enquanto este Pokémon estiver no seu Banco, todos os seus Pokémon do Steven receberão 30 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência). O efeito de Palácio de Pedra não acumula.",
			'es-mx': "Mientras este Pokémon esté en tu Banca, los ataques de los Pokémon de tu rival hacen 30 puntos de daño menos a todos tus Pokémon de Steven (después de aplicar Debilidad y Resistencia). El efecto de Palacio de Piedra no se acumula."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			de: "Magischer Schuss",
			it: "Magicolpo",
			es: "Disparo Mágico",
			pt: "Tiro Mágico",
			'es-mx': "Disparo Mágico"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card

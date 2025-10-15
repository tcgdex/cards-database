import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
		de: "Mottineva",
		it: "Frosmoth",
		es: "Frosmoth",
		pt: "Frosmoth",
		'es-mx': "Frosmoth"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Chilling Wings",
			fr: "Ailes Glaçantes",
			de: "Eiskalte Flügel",
			it: "Ali Gelide",
			es: "Alas Glaciales",
			pt: "Asas Glaciais",
			'es-mx': "Alas Glaciales"
		},

		effect: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Your opponent's Active Pokémon is now Asleep.",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Das Aktive Pokémon deines Gegners schläft jetzt.",
			it: "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Il Pokémon attivo del tuo avversario viene addormentato.",
			es: "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). El Pokémon Activo de tu rival pasa a estar Dormido.",
			pt: "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.) O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). El Pokémon Activo de tu rival ahora está Dormido."
		}
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654382
	}
}

export default card
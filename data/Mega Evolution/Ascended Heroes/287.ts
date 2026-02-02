import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Marnie's Grimmsnarl ex",
		fr: "Angoliath-ex de Rosemary",
		es: "Grimmsnarl ex de Roxy",
		'es-mx': "Grimmsnarl ex de Marnie",
		de: "Marys Olangaar-ex",
		it: "Grimmsnarl-ex di Mary",
		pt: "Grimmsnarl ex da Marine"
	},

	illustrator: "Ligton",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Punk Up",
			fr: "Toujours Plus Punk",
			es: "Gamberrear",
			'es-mx': "A Punkear",
			de: "Aufpunken",
			it: "Fervore Punk",
			pt: "Virar Punk"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 5 Basic {D} Energy cards and attach them to your Marnie's Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 5 cartes Énergie {D} de base et les attacher à vos Pokémon de Rosemary comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes buscar en tu baraja hasta 5 cartas de Energía {D} Básica y unirlas a tus Pokémon de Roxy de la manera que desees. Después, baraja las cartas de tu baraja.",
			'es-mx': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes buscar en tu mazo hasta 5 cartas de Energía {D} Básica y unirlas a tus Pokémon de Marnie de la manera que quieras. Después, baraja las cartas de tu mazo.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du dein Deck nach bis zu 5 Basis-{D}-Energiekarten durchsuchen und sie beliebig an deine Marys Pokémon anlegen. Mische anschließend dein Deck.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi cercare nel tuo mazzo fino a cinque carte Energia base {D} e assegnarle ai tuoi Pokémon di Mary nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá procurar por até 5 cartas de Energia {D} Básica no seu baralho e ligá-las aos seus Pokémon da Marine como desejar. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Shadow Bullet",
			fr: "Kunaï Sournois",
			es: "Bala Sombra",
			'es-mx': "Bala Sombría",
			de: "Schattenkugel",
			it: "Dardombra",
			pt: "Projétil Sombrio"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676099,
		cardmarket: 869898
	}
}

export default card
import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Inteleon",
		'fr-fr': "Lézargus",
		'es-es': "Inteleon",
		'it-it': "Inteleon",
		'pt-br': "Inteleon",
		'de-de': "Intelleon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Drizzile",
		'fr-fr': "Arrozard",
		'es-es': "Drizzile",
		'it-it': "Drizzile",
		'pt-br': "Drizzile",
		'de-de': "Phlegleon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shady Dealings",
				'fr-fr': "Affaires Louches",
				'es-es': "Negocios Turbios",
				'it-it': "Trama Sospetta",
				'pt-br': "Negociações Secretas",
				'de-de': "Dunkle Machenschaften"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 2 Trainer cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Dresseur, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Entrenador, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Allenatore, mostrarle e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá procurar por até 2 cartas de Treinador no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du dein Deck nach bis zu 2 Trainerkarten durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Bullet",
				'fr-fr': "Aquaballe",
				'es-es': "Bala Agua",
				'it-it': "Idrodardo",
				'pt-br': "Projétil de Água",
				'de-de': "Aquageschoss"
			},
			effect: {
				'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		'en-us': "It has many hidden capabilities, such as fingertips that can shoot water and a membrane on its back that it can use to glide through the air."
	},

	dexId: [818],

	thirdParty: {
		cardmarket: 427216,
		tcgplayer: 208355
	}
}

export default card

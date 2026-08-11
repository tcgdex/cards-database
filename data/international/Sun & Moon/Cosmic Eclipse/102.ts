import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Lunala",
		'fr-fr': "Lunala",
		'es-es': "Lunala",
		'it-it': "Lunala",
		'pt-br': "Lunala",
		'de-de': "Lunala"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		792,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Blessing of the Moone",
				'fr-fr': "Grâce du Halo Lunaire",
				'es-es': "Bendición de la Corona Lunar",
				'it-it': "Preghiera Lunare",
				'pt-br': "Bênçãos Lunares",
				'de-de': "Mondscheiben-Segen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if you have Solgaleo in play, you may search your deck for up to 2 Energy cards and attach them to your Solgaleo or Lunala in any way you like. Then, shuffle your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si vous avez Solgaleo en jeu, vous pouvez chercher jusqu’à 2 cartes Énergie dans votre deck, puis les attacher à vos Solgaleo ou Lunala, de la manière que vous voulez. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si tienes a Solgaleo en juego, puedes buscar en tu baraja hasta 2 cartas de Energía y unirlas a tus Solgaleo o Lunala de la manera que desees. Después, baraja las cartas de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se hai Solgaleo in gioco, puoi cercare nel tuo mazzo fino a due carte Energia e assegnarle a piacimento ai tuoi Solgaleo o Lunala. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se você tiver Solgaleo em jogo, poderá procurar por até 2 cartas de Energia no seu baralho e ligá-las aos seus Solgaleo ou Lunala como desejar. Em seguida, embaralhe o seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du, wenn du Solgaleo im Spiel hast, dein Deck nach bis zu 2 Energiekarten durchsuchen und sie beliebig an deine Solgaleo oder Lunala anlegen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Lunar Blast",
				'fr-fr': "Explosion Lunaire",
				'es-es': "Explosión Lunar",
				'it-it': "Furia Lunare",
				'pt-br': "Detonação Lunar",
				'de-de': "Mondsturm"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Records of it exist in writings from long, long ago, where it was known by the name \"the beast that calls the moon.\"",
	},

	thirdParty: {
		cardmarket: 408154,
		tcgplayer: 201277
	}
}

export default card

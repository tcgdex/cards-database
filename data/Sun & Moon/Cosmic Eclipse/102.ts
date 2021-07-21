import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Lunala",
		fr: "Lunala",
		es: "Lunala",
		it: "Lunala",
		pt: "Lunala",
		de: "Lunala"
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
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blessing of the Moone",
				fr: "Grâce du Halo Lunaire",
				es: "Bendición de la Corona Lunar",
				it: "Preghiera Lunare",
				pt: "Bênçãos Lunares",
				de: "Mondscheiben-Segen"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Solgaleo in play, you may search your deck for up to 2 Energy cards and attach them to your Solgaleo or Lunala in any way you like. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si vous avez Solgaleo en jeu, vous pouvez chercher jusqu’à 2 cartes Énergie dans votre deck, puis les attacher à vos Solgaleo ou Lunala, de la manière que vous voulez. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), si tienes a Solgaleo en juego, puedes buscar en tu baraja hasta 2 cartas de Energía y unirlas a tus Solgaleo o Lunala de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se hai Solgaleo in gioco, puoi cercare nel tuo mazzo fino a due carte Energia e assegnarle a piacimento ai tuoi Solgaleo o Lunala. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se você tiver Solgaleo em jogo, poderá procurar por até 2 cartas de Energia no seu baralho e ligá-las aos seus Solgaleo ou Lunala como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du, wenn du Solgaleo im Spiel hast, dein Deck nach bis zu 2 Energiekarten durchsuchen und sie beliebig an deine Solgaleo oder Lunala anlegen. Mische anschließend dein Deck."
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
				en: "Lunar Blast",
				fr: "Explosion Lunaire",
				es: "Explosión Lunar",
				it: "Furia Lunare",
				pt: "Detonação Lunar",
				de: "Mondsturm"
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



}

export default card

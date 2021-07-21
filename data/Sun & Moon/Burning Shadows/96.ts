import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Ribombee",
		fr: "Rubombelle",
		es: "Ribombee",
		it: "Ribombee",
		pt: "Ribombee",
		de: "Bandelby"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		743,
	],
	hp: 70,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Cutiefly",
		fr: "Bombydou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Honey Gather",
				fr: "Cherche Miel",
				es: "Recogemiel",
				it: "Mielincetta",
				pt: "Pegar Mel",
				de: "Honigmaul"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher jusqu’à 2 cartes Énergie de base dans votre deck, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja hasta 2 cartas de Energía Básica, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo fino a due carte Energia base, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por até 2 cartas de Energia básica no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach bis zu 2 Basis-Energiekarten durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pollen Shot",
				fr: "Tir Pollen",
				es: "Lanzamiento de Polen",
				it: "Colpo Pollinare",
				pt: "Arremesso de Pólen",
				de: "Pollenschuss"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card

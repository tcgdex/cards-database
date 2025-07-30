import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre",
		es: "Venusaur",
		it: "Venusaur",
		pt: "Venusaur",
		de: "Bisaflor"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ivysaur",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Floral Scent",
				fr: "Senteur Florale",
				es: "Esencia Floral",
				it: "Fioraroma",
				pt: "Perfume Floral",
				de: "Blütenduft"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon dans votre deck, le montrer et l’ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja un Pokémon, enseñarlo y ponerlo en tu mano. Baraja las cartas de tu baraja después.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Pokémon, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode procurar um Pokémon no seu deck, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe seus cards.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Powder",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 280331,
		tcgplayer: 90322
	}
}

export default card

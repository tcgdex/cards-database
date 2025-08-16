import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Gabite",
		fr: "Carmache",
		es: "Gabite",
		it: "Gabite",
		pt: "Gabite",
		de: "Knarksel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		444,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dragon Call",
				fr: "Appel du Dragon",
				es: "Llamada de Dragón",
				it: "Dragorichiamo",
				pt: "Chamado do Dragão",
				de: "Drachenruf"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Dragon Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Dragon dans votre deck, le montrer et l’ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja un Pokémon Dragon, enseñarlo y ponerlo en tu mano. Baraja las cartas de tu baraja después.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Pokémon Dragon, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode procurar um Pokémon Dragon no seu deck, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe seus cards.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Dragon-Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Fighting",
			],
			name: {
				en: "Dragonslice",
				fr: "Draco-Tranche",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280527,
		tcgplayer: 85601
	}
}

export default card

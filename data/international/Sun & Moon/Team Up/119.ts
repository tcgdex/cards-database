import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Dragonite",
		'fr-fr': "Dracolosse",
		'es-es': "Dragonite",
		'it-it': "Dragonite",
		'pt-br': "Dragonite",
		'de-de': "Dragoran"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fast Call",
				'fr-fr': "Appel Rapide",
				'es-es': "Llamada Rápida",
				'it-it': "Richiamo Rapido",
				'pt-br': "Chamada Rápida",
				'de-de': "Schnellruf"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Supporter dans votre deck, la montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 carta de Partidario, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 carta de Apoiador no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
				'es-es': "Garra Dragón",
				'it-it': "Dragartigli",
				'pt-br': "Garra de Dragão",
				'de-de': "Drachenklaue"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It flies over raging seas as if they were nothing. Observing this, a ship's captain dubbed this Pokémon \"the sea incarnate.\"",
	},

	thirdParty: {
		cardmarket: 369047,
		tcgplayer: 183906
	}
}

export default card

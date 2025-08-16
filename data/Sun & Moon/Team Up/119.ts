import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		es: "Dragonite",
		it: "Dragonite",
		pt: "Dragonite",
		de: "Dragoran"
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
		en: "Dragonair",
		fr: "Draco",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fast Call",
				fr: "Appel Rapide",
				es: "Llamada Rápida",
				it: "Richiamo Rapido",
				pt: "Chamada Rápida",
				de: "Schnellruf"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Supporter dans votre deck, la montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 carta de Partidario, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 carta de Apoiador no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
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
				en: "Dragon Claw",
				fr: "Dracogriffe",
				es: "Garra Dragón",
				it: "Dragartigli",
				pt: "Garra de Dragão",
				de: "Drachenklaue"
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

	thirdParty: {
		cardmarket: 369047,
		tcgplayer: 183906
	}
}

export default card

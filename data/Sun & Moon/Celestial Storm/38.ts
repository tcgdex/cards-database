import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
		es: "Ludicolo",
		it: "Ludicolo",
		pt: "Ludicolo",
		de: "Kappalores"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Swing Dance",
				fr: "Danse Qui Balance",
				es: "Baila el Swing",
				it: "Roteodanza",
				pt: "Dançar no Ritmo",
				de: "Schwungvoller Tanz"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes robar 1 carta.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare una carta.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode comprar 1 carta.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Karte ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Circular Steps",
				fr: "Pas Circulaires",
				es: "Pasos Circulares",
				it: "Passi Circolari",
				pt: "Passos Circulares",
				de: "Umkreisende Tanzschritte"
			},
			effect: {
				en: "This attack does 10 more damage for each other Pokémon in play (both yours and your opponent’s).",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chacun des autres Pokémon en jeu (les vôtres et ceux de votre adversaire).",
				es: "Este ataque hace 10 puntos de daño más por cada uno de los otros Pokémon en juego (tanto tuyos como de tu rival).",
				it: "Questo attacco infligge 10 danni in più per ogni altro Pokémon in gioco, sia tuo che del tuo avversario.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada um dos outros Pokémon em jogo (seus e do seu oponente).",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der anderen Pokémon im Spiel (deiner und der deines Gegners) zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 361285
	}
}

export default card

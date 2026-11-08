import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [473],
	set: Set,

	name: {
		'en-us': "Mamoswine ex",
		'fr-fr': "Mammochon-ex",
		'es-es': "Mamoswine ex",
		'de-de': "Mamutel-ex",
		'it-it': "Mamoswine-ex",
		'pt-br': "Mamoswine ex",
		'es-mx': "Mamoswine ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
		'es-es': "Piloswine",
		'de-de': "Keifel",
		'it-it': "Piloswine",
		'pt-br': "Piloswine",
		'es-mx': "Piloswine"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mammoth Hauler",
			'fr-fr': "Transport Mammouth",
			'es-es': "Transporte Mamut",
			'de-de': "Mammut-Transport",
			'it-it': "Trasporto Mastodontico",
			'pt-br': "Reboque Mastodôntico",
			'es-mx': "Transporte Mamut"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck un Pokémon, le montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 Pokémon, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo un Pokémon, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por um Pokémon no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes buscar en tu mazo 1 Pokémon, mostrarlo y ponerlo en tu mano. Después, baraja las cartas de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Rumbling March",
			'fr-fr': "Marche Grondante",
			'es-es': "Marcha Estruendosa",
			'de-de': "Bebender Marsch",
			'it-it': "Marcia Rombante",
			'pt-br': "Marcha Estrondosa",
			'es-mx': "Marcha Retumbante"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each Stage 2 Pokémon on your Bench.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Pokémon de Niveau 2 sur votre Banc.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Pokémon de Fase 2 en tu Banca.",
			'de-de': "Diese Attacke fügt für jedes Phase-2-Pokémon auf deiner Bank 40 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Pokémon di Fase 2 nella tua panchina.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Pokémon Estágio 2 no seu Banco.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon de Fase 2 en Banca."
		},

		damage: "180+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",
	suffix: "ex",
	illustrator: "Nisota Niso",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817231,
				tcgplayer: 623506
			}
		},
		{
			type: 'holo',
			stamp: ['player-rewards-program']
		}
	],
}

export default card

import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Nidoqueen",
		'fr-fr': "Nidoqueen",
		'es-es': "Nidoqueen",
		'it-it': "Nidoqueen",
		'pt-br': "Nidoqueen",
		'de-de': "Nidoqueen"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Queen’s Call",
				'fr-fr': "Appel de la Souveraine",
				'es-es': "Llamada de la Reina",
				'it-it': "Richiamo del Nido",
				'pt-br': "Chamado da Rainha",
				'de-de': "Ruf der Königin"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Pokémon that isn’t a Pokémon-GX or Pokémon-EX, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher dans votre deck un Pokémon qui n’est pas un Pokémon-GX ou un Pokémon-EX, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 Pokémon que no sea 1 Pokémon-GX o Pokémon-EX, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Pokémon che non sia un Pokémon-GX o un Pokémon-EX, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 Pokémon que não seja um Pokémon-GX ou Pokémon-EX no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Pokémon, das kein Pokémon-GX oder Pokémon-EX ist, durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Lariat",
				'fr-fr': "Lasso Puissant",
				'es-es': "Lazo Poderoso",
				'it-it': "Lazo del Potere",
				'pt-br': "Lariat Poderoso",
				'de-de': "Powerlasso"
			},
			effect: {
				'en-us': "This attack does 50 more damage for each Evolution Pokémon on your Bench.",
				'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Pokémon Évolutif sur votre Banc.",
				'es-es': "Este ataque hace 50 puntos de daño más por cada Pokémon Evolución en tu Banca.",
				'it-it': "Questo attacco infligge 50 danni in più per ogni Pokémon Evoluzione nella tua panchina.",
				'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Pokémon de Evolução no seu Banco.",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der Entwicklungs-Pokémon auf deiner Bank zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It uses its scaly, rugged body to seal the entrance of its nest and protect its young from predators.",
	},

	thirdParty: {
		cardmarket: 368986,
		tcgplayer: 183834
	}
}

export default card

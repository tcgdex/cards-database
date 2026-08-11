import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Lunatone",
		'fr-fr': "Séléroc",
		'es-es': "Lunatone",
		'it-it': "Lunatone",
		'pt-br': "Lunatone",
		'de-de': "Lunastein"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		337,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sol Shade",
				'fr-fr': "Sol-Ombre",
				'es-es': "Sombra Sol",
				'it-it': "Ombra Sol",
				'pt-br': "Sombra Sol",
				'de-de': "Sonnenschatten"
			},
			effect: {
				'en-us': "If you have Solrock in play, Fire Pokémon in play (both yours and your opponent’s) have no Abilities, except Pokémon-GX and Pokémon-EX.",
				'fr-fr': "Si vous avez Solaroc en jeu, les Pokémon Fire en jeu (les vôtres et ceux de votre adversaire) n’ont pas de talent, à l’exception des Pokémon-GX et des Pokémon-EX.",
				'es-es': "Si tienes a Solrock en juego, los Pokémon Fire en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad, excepto los Pokémon-GX y Pokémon-EX.",
				'it-it': "Se hai Solrock in gioco, le abilità dei Pokémon Fire in gioco, sia tuoi che del tuo avversario, non hanno effetto, a eccezione dei Pokémon-GX e dei Pokémon-EX.",
				'pt-br': "Se você tiver Solrock em jogo, os Pokémon Fire em jogo (seus e do seu oponente) não têm Habilidades, exceto pelos Pokémon-GX e Pokémon-EX.",
				'de-de': "Wenn du Sonnfel im Spiel hast, haben Fire-Pokémon im Spiel (deine und die deines Gegners) keine Fähigkeiten, außer Pokémon-GX und Pokémon-EX."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc Psy",
				'es-es': "Psicocarga",
				'it-it': "Psicoshock",
				'pt-br': "Choque Psíquico",
				'de-de': "Psychoschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It was discovered at the site of a meteor strike 40 years ago. Its stare can lull its foes to sleep.",
	},

	thirdParty: {
		cardmarket: 361306,
		tcgplayer: 170882
	}
}

export default card

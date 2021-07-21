import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Séléroc",
		es: "Lunatone",
		it: "Lunatone",
		pt: "Lunatone",
		de: "Lunastein"
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
				en: "Sol Shade",
				fr: "Sol-Ombre",
				es: "Sombra Sol",
				it: "Ombra Sol",
				pt: "Sombra Sol",
				de: "Sonnenschatten"
			},
			effect: {
				en: "If you have Solrock in play, Fire Pokémon in play (both yours and your opponent’s) have no Abilities, except Pokémon-GX and Pokémon-EX.",
				fr: "Si vous avez Solaroc en jeu, les Pokémon Fire en jeu (les vôtres et ceux de votre adversaire) n’ont pas de talent, à l’exception des Pokémon-GX et des Pokémon-EX.",
				es: "Si tienes a Solrock en juego, los Pokémon Fire en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad, excepto los Pokémon-GX y Pokémon-EX.",
				it: "Se hai Solrock in gioco, le abilità dei Pokémon Fire in gioco, sia tuoi che del tuo avversario, non hanno effetto, a eccezione dei Pokémon-GX e dei Pokémon-EX.",
				pt: "Se você tiver Solrock em jogo, os Pokémon Fire em jogo (seus e do seu oponente) não têm Habilidades, exceto pelos Pokémon-GX e Pokémon-EX.",
				de: "Wenn du Sonnfel im Spiel hast, haben Fire-Pokémon im Spiel (deine und die deines Gegners) keine Fähigkeiten, außer Pokémon-GX und Pokémon-EX."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psyshock",
				fr: "Choc Psy",
				es: "Psicocarga",
				it: "Psicoshock",
				pt: "Choque Psíquico",
				de: "Psychoschock"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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



}

export default card

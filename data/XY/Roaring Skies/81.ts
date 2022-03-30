import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
		es: "Unfezant",
		it: "Unfezant",
		pt: "Unfezant",
		de: "Fasasnob"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		521,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
		es: "Tranquill",
		it: "Tranquill",
		pt: "Tranquill",
		de: "Navitaub"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Évolution Δ",
				en: "Δ Evolution",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
				en: "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon.",
				es: "{title}: Puedes jugar esta carta de tu mano para hacer evolucionar a 1 Pokémon durante tu primer turno o durante el turno en que pongas en juego a ese Pokémon.",
				it: "{title}: Puoi giocare questa carta dalla tua mano per far evolvere un Pokémon durante il tuo primo turno o durante il turno in cui l'hai giocato.",
				pt: "{title}: Você pode jogar este card de sua mão para evoluir um Pokémon durante sua primeira vez de jogar ou no turno em que jogar aquele Pokémon.",
				de: "{title}: Du kannst diese Karte von deiner Hand spielen, um 1 Pokémon während deines ersten Zuges oder des Zuges, in dem du es spielst, zu entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feather Dance",
				fr: "Danse-Plume",
				es: "Danza Pluma",
				it: "Danzadipiume",
				pt: "Dança das Penas",
				de: "Daunenreigen"
			},
			effect: {
				en: "During your next turn, each of this Pokémon's attacks does 80 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 80 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, cada uno de los ataques de este Pokémon hace 80 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, ciascuno degli attacchi di questo Pokémon infligge 80 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante sua próxima vez de jogar, cada um dos ataques deste Pokémon causará 80 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt jeder Angriff dieses Pokémon 80 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Attack",
				fr: "Piqué",
				es: "Ataque Aéreo",
				it: "Aeroattacco",
				pt: "Ataque do Céu",
				de: "Himmelsfeger"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0
}

export default card

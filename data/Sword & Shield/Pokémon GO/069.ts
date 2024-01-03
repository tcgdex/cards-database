import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Rare Candy",
		fr: "Super Bonbon",
		es: "Caramelo Raro",
		it: "Caramella Rara",
		pt: "Doce Raro",
		de: "Sonderbonbon"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it, skipping the Stage 1. You can't use this card during your first turn or on a Basic Pokémon that was put into play this turn.",
		fr: "Choisissez l'un de vos Pokémon de base en jeu. Si vous avez dans votre main une Évolution de Niveau 2 de ce Pokémon-là, placez celle-ci sur le Pokémon de base pour le faire évoluer, sans passer par le Niveau 1. Vous ne pouvez utiliser cette carte ni pendant votre premier tour ni sur un Pokémon de base qui a été mis en jeu pendant ce tour.",
		es: "Elige 1 de tus Pokémon Básicos en juego. Si tienes en tu mano 1 carta de Fase 2 que evolucione de ese Pokémon, pon esa carta sobre el Pokémon Básico para hacerlo evolucionar, saltándote la Fase 1. No puedes usar esta carta durante tu primer turno o sobre un Pokémon Básico que se haya puesto en juego en este turno.",
		it: "Scegli uno dei tuoi Pokémon Base in gioco. Se hai in mano una carta di Fase 2 che si evolve da quel Pokémon, metticela sopra per farlo evolvere, saltando la Fase 1. Non puoi usare questa carta durante il tuo primo turno o su un Pokémon Base che hai messo in gioco nel turno in corso.",
		pt: "Escolha 1 dos seus Pokémon Básicos em jogo. Se você tiver uma carta de Estágio 2 na sua mão que evolua daquele Pokémon, coloque-a sobre o Pokémon Básico para evoluí-lo, pulando o Estágio 1. Você não pode usar esta carta durante o seu primeiro turno ou em um Pokémon Básico que foi colocado em jogo neste turno.",
		de: "Wähle 1 deiner Basis-Pokémon im Spiel. Wenn du eine Phase-2-Karte auf deiner Hand hast, die sich aus jenem Pokémon entwickelt, lege sie auf das Basis-Pokémon, um es zu entwickeln und Phase 1 zu überspringen. Du kannst diese Karte nicht während deines ersten Zuges oder für ein Basis-Pokémon, das während dieses Zuges ins Spiel gebracht wurde, verwenden."
	},

	trainerType: "Item",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card
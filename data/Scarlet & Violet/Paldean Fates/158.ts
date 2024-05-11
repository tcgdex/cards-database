import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		pt: "Spiritomb",
		de: "Kryppuk"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fettered in Misfortune",
			fr: "Entrave de la Malchance",
			es: "Atadura del Infortunio",
			it: "Catene Sventurate",
			pt: "Unidos por Azar",
			de: "Fesseln des Unglücks"
		},

		effect: {
			en: "Basic Pokémon V in play (both yours and your opponent's) have no Abilities.",
			fr: "Les Pokémon-V de base en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
			es: "Los Pokémon V Básicos en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
			it: "I Pokémon-V Base in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
			pt: "Pokémon V Básicos em jogo (seus e do seu oponente) não têm Habilidades.",
			de: "Basis-Pokémon-V im Spiel (deine und die deines Gegners) haben keine Fähigkeiten."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fade Out",
			fr: "Faiblir",
			es: "Difuminar",
			it: "Dissolvenza",
			pt: "Desaparecer",
			de: "Ausblenden"
		},

		effect: {
			en: "Put this Pokémon and all attached cards into your hand.",
			fr: "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
			de: "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [442],
	set: Set,

	name: {
		'fr-fr': "Spiritomb",
		'en-us': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'pt-br': "Spiritomb",
		'de-de': "Kryppuk"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Entrave de la Malchance",
			'en-us': "Fettered in Misfortune",
			'es-es': "Atadura del Infortunio",
			'it-it': "Catene Sventurate",
			'pt-br': "Unidos por Azar",
			'de-de': "Fesseln des Unglücks"
		},

		effect: {
			'fr-fr': "Les Pokémon-V de base en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
			'en-us': "Basic Pokémon V in play (both yours and your opponent's) have no Abilities.",
			'es-es': "Los Pokémon V Básicos en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
			'it-it': "I Pokémon-V Base in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
			'pt-br': "Pokémon V Básicos em jogo (seus e do seu oponente) não têm Habilidades.",
			'de-de': "Basis-Pokémon-V im Spiel (deine und die deines Gegners) haben keine Fähigkeiten."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Faiblir",
			'en-us': "Fade Out",
			'es-es': "Difuminar",
			'it-it': "Dissolvenza",
			'pt-br': "Desaparecer",
			'de-de': "Ausblenden"
		},

		effect: {
			'fr-fr': "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			'en-us': "Put this Pokémon and all attached cards into your hand.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			'it-it': "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			'pt-br': "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
			'de-de': "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715564,
				tcgplayer: 497504,
				cardtrader: 248716
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715564,
				tcgplayer: 497504,
				cardtrader: 248716
			}
		},
	],

	illustrator: "Aya Kusube",

	description: {
		'en-us': "Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.",
	},
}

export default card

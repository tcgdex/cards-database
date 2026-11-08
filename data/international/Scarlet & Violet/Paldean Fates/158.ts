import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [442],
	set: Set,

	name: {
		'en-us': "Spiritomb",
		'fr-fr': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'pt-br': "Spiritomb",
		'de-de': "Kryppuk"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fettered in Misfortune",
			'fr-fr': "Entrave de la Malchance",
			'es-es': "Atadura del Infortunio",
			'it-it': "Catene Sventurate",
			'pt-br': "Unidos por Azar",
			'de-de': "Fesseln des Unglücks"
		},

		effect: {
			'en-us': "Basic Pokémon V in play (both yours and your opponent's) have no Abilities.",
			'fr-fr': "Les Pokémon-V de base en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
			'es-es': "Los Pokémon V Básicos en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
			'it-it': "I Pokémon-V Base in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
			'pt-br': "Pokémon V Básicos em jogo (seus e do seu oponente) não têm Habilidades.",
			'de-de': "Basis-Pokémon-V im Spiel (deine und die deines Gegners) haben keine Fähigkeiten."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Fade Out",
			'fr-fr': "Faiblir",
			'es-es': "Difuminar",
			'it-it': "Dissolvenza",
			'pt-br': "Desaparecer",
			'de-de': "Ausblenden"
		},

		effect: {
			'en-us': "Put this Pokémon and all attached cards into your hand.",
			'fr-fr': "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
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
				cardmarket: 751697,
				tcgplayer: 534680,
				cardtrader: 274343
			}
		},
	],

	illustrator: "MAHOU",

	description: {
		'en-us': "Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.",
	},

}

export default card

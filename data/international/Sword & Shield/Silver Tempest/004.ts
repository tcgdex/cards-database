import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [168],
	set: Set,

	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'es-es': "Ariados",
		'it-it': "Ariados",
		'pt-br': "Ariados",
		'de-de': "Ariados"
	},

	illustrator: "Tika Matsuno",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Hidden Threads",
			'fr-fr': "Toile Dissimulée",
			'es-es': "Hilos Ocultos",
			'it-it': "Tela Occulta",
			'pt-br': "Fios Ocultos",
			'de-de': "Verborgene Fäden"
		},

		effect: {
			'en-us': "Your opponent's Pokémon VSTAR's attacks cost Colorless more. You can't apply more than 1 Hidden Threads Ability at a time.",
			'fr-fr': "Les attaques des Pokémon-VSTAR de votre adversaire coûtent Colorless de plus. Vous ne pouvez utiliser qu'un talent Toile Dissimulée à la fois.",
			'es-es': "Los ataques de los Pokémon V-ASTRO de tu rival cuestan Colorless más. No puedes aplicar más de 1 habilidad Hilos Ocultos a la vez.",
			'it-it': "Il costo degli attacchi dei Pokémon-V ASTRO del tuo avversario aumenta di Colorless. Non puoi applicare più di un'abilità Tela Occulta alla volta.",
			'pt-br': "Os ataques dos Pokémon V-ASTRO do seu oponente custam Colorless a mais. Você não pode usar mais de 1 Habilidade Fios Ocultos por vez.",
			'de-de': "Die Kosten der Attacken von Pokémon-VSTAR deines Gegners erhöhen sich um Colorless. Du kannst immer nur jeweils 1 Fähigkeit Verborgene Fäden einsetzen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It spews threads from its mouth to catch its prey. When night falls, it leaves its web to go hunt aggressively.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682043,
				tcgplayer: 451624
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682043,
				tcgplayer: 451624
			}
		},
	],
}

export default card

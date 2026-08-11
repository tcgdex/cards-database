import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [402],
	set: Set,

	name: {
		'en-us': "Kricketune",
		'fr-fr': "Mélokrik",
		'es-es': "Kricketune",
		'it-it': "Kricketune",
		'pt-br': "Kricketune",
		'de-de': "Zirpeise"
	},

	illustrator: "Nurikabe",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik",
		'es-es': "Kricketot",
		'it-it': "Kricketot",
		'pt-br': "Kricketot",
		'de-de': "Zirpurze"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Swelling Tune",
			'fr-fr': "Mélodie Montante",
			'es-es': "Melodía Rebosante",
			'it-it': "Melodia Amplificata",
			'pt-br': "Melodia Crescente",
			'de-de': "Schwellender Gesang"
		},

		effect: {
			'en-us': "Your Grass Pokémon in play, except any Kricketune, get +40 HP. You can't apply more than 1 Swelling Tune Ability at a time.",
			'fr-fr': "Vos Pokémon Grass en jeu, à l'exception de Mélokrik, reçoivent +40 PV. Vous ne pouvez utiliser qu'un talent Mélodie Montante à la fois.",
			'es-es': "Tus Pokémon Grass en juego, excepto los Kricketune, obtienen 40 PS más. No puedes aplicar más de 1 habilidad Melodía Rebosante a la vez.",
			'it-it': "I tuoi Pokémon Grass in gioco, a eccezione di qualsiasi Kricketune, hanno 40 PS in più. Non puoi applicare più di un'abilità Melodia Amplificata alla volta.",
			'pt-br': "Seus Pokémon Grass em jogo, exceto por quaisquer Kricketune, recebem 40 PS a mais. Você não pode usar mais de 1 Habilidade Melodia Crescente por vez.",
			'de-de': "Deine Grass-Pokémon im Spiel, außer Zirpeise, erhalten +40 KP. Du kannst immer nur jeweils 1 Fähigkeit Schwellender Gesang einsetzen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
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
		'en-us': "It signals its emotions with its melodies. Scientists are studying these melodic patterns.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691881,
				tcgplayer: 478019
			}
		},
	],
}

export default card

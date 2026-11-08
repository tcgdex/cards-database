import { Card } from "models/database/card"
import Set from "../Astral Radiance Trainer Gallery"

const card: Card = {
	dexId: [460],
	set: Set,

	name: {
		'en-us': "Abomasnow",
		'fr-fr': "Blizzaroi",
		'es-es': "Abomasnow",
		'it-it': "Abomasnow",
		'pt-br': "Abomasnow",
		'de-de': "Rexblisar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'es-es': "Snover",
		'it-it': "Snover",
		'pt-br': "Snover",
		'de-de': "Shnebedeck"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Toughness Boost",
			'fr-fr': "Boost d'Endurance",
			'es-es': "Impulso Vigorizante",
			'it-it': "Carica di Tenacia",
			'pt-br': "Impulso da Determinação",
			'de-de': "Stärkeschub"
		},

		effect: {
			'en-us': "Your Single Strike Pokémon in play, except any Abomasnow, get +50 HP. You can't apply more than 1 Toughness Boost Ability at a time.",
			'fr-fr': "Vos Pokémon Poing Final en jeu, à l'exception de Blizzaroi, reçoivent +50 PV. Vous ne pouvez utiliser qu'un talent Boost d'Endurance à la fois.",
			'es-es': "Tus Pokémon Golpe Brusco en juego, excepto los Abomasnow, obtienen 50 PS más. No puedes aplicar más de 1 habilidad Impulso Vigorizante a la vez.",
			'it-it': "I tuoi Pokémon Colpo Singolo in gioco, a eccezione di qualsiasi Abomasnow, hanno 50 PS in più. Non puoi applicare più di un'abilità Carica di Tenacia alla volta.",
			'pt-br': "Seus Pokémon Golpe Decisivo em jogo, exceto por quaisquer Abomasnow, recebem 50 PS a mais. Você não pode usar mais de 1 Habilidade Impulso da Determinação por vez.",
			'de-de': "Deine Fokussierter-Angriff-Pokémon im Spiel, außer Rexblisar, erhalten +50 KP. Du kannst immer nur jeweils 1 Fähigkeit Stärkeschub einsetzen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'es-es': "Megapuño",
			'it-it': "Megapugno",
			'pt-br': "Megassoco",
			'de-de': "Megahieb"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",


	description: {
		'en-us': "The Pokémon is known to bring blizzards. A shake of its massive body is enough to cause whiteout conditions.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658878,
				tcgplayer: 272472
			}
		},
	],
}

export default card

import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [201],
	set: Set,

	name: {
		'en-us': "Unown VSTAR",
		'fr-fr': "Zarbi VSTAR",
		'es-es': "Unown V-ASTRO",
		'it-it': "Unown V ASTRO",
		'pt-br': "Unown V-ASTRO",
		'de-de': "Icognito VSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Unown V",
		'fr-fr': "Zarbi-V",
		'es-es': "Unown V",
		'it-it': "Unown-V",
		'pt-br': "Unown V",
		'de-de': "Icognito-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Tri Power",
			'fr-fr': "Puissance Triple",
			'es-es': "Poder Triple",
			'it-it': "Triplo Potere",
			'pt-br': "Tripoder",
			'de-de': "Dreifachkraft"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 70 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Star Cipher",
			'fr-fr': "Code Secret Star",
			'es-es': "Astro Cifrado",
			'it-it': "Astro Cifrato",
			'pt-br': "Criptograma Astral",
			'de-de': "Sternencode"
		},

		effect: {
			'en-us': "Until this Pokémon leaves play, it gains an Ability that has the effect \"The Weakness of each of your opponent's Pokémon in play is now Psychic. (The amount of Weakness doesn't change.)\" (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Tant que ce Pokémon est en jeu, il obtient un talent ayant l'effet \" La Faiblesse de chacun des Pokémon en jeu de votre adversaire est désormais Psychic. (La valeur de la Faiblesse ne change pas.) \". (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Mientras este Pokémon esté en juego, obtiene una habilidad que tiene el siguiente efecto: \"La Debilidad de cada uno de los Pokémon en juego de tu rival pasa a ser Psychic. (La cantidad de Debilidad no cambia)\". (Nopuedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Finché questo Pokémon rimane in gioco, possiede un'abilità che ha l'effetto: \"La debolezza di ciascun Pokémon in gioco del tuo avversario diventa Psychic. Quanto è debole non cambia\". Non puoi usare più di un Potere V ASTRO a partita.",
			'pt-br': "Até este Pokémon sair de jogo, ele ganhará uma Habilidade com o efeito \"A Fraqueza de cada um dos Pokémon do seu oponente em jogo será Psychic (a quantidade de Fraqueza não muda).\"(você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'de-de': "Bis dieses Pokémon das Spiel verlässt, erhält es eine Fähigkeit mit dem Effekt \"Die Schwäche jedes Pokémon deines Gegners im Spiel ist jetzt Psychic. (Die Höhe der Schwäche ändert sich nicht.)\" (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
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
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 682247,
				tcgplayer: 451989
			}
		},
	],
}

export default card

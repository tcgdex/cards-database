import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [201],
	set: Set,

	name: {
		en: "Unown VSTAR",
		fr: "Zarbi VSTAR",
		es: "Unown V-ASTRO",
		it: "Unown V ASTRO",
		pt: "Unown V-ASTRO",
		de: "Icognito VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],

	evolveFrom: {
		en: "Unown V",
		fr: "Zarbi-V",
		es: "Unown V",
		it: "Unown-V",
		pt: "Unown V",
		de: "Icognito-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Tri Power",
			fr: "Puissance Triple",
			es: "Poder Triple",
			it: "Triplo Potere",
			pt: "Tripoder",
			de: "Dreifachkraft"
		},

		effect: {
			en: "Flip 3 coins. This attack does 70 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Star Cipher",
			fr: "Code Secret Star",
			es: "Astro Cifrado",
			it: "Astro Cifrato",
			pt: "Criptograma Astral",
			de: "Sternencode"
		},

		effect: {
			en: "Until this Pokémon leaves play, it gains an Ability that has the effect \"The Weakness of each of your opponent's Pokémon in play is now Psychic. (The amount of Weakness doesn't change.)\" (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Tant que ce Pokémon est en jeu, il obtient un talent ayant l'effet \" La Faiblesse de chacun des Pokémon en jeu de votre adversaire est désormais Psychic. (La valeur de la Faiblesse ne change pas.) \". (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Mientras este Pokémon esté en juego, obtiene una habilidad que tiene el siguiente efecto: \"La Debilidad de cada uno de los Pokémon en juego de tu rival pasa a ser Psychic. (La cantidad de Debilidad no cambia)\". (Nopuedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Finché questo Pokémon rimane in gioco, possiede un'abilità che ha l'effetto: \"La debolezza di ciascun Pokémon in gioco del tuo avversario diventa Psychic. Quanto è debole non cambia\". Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Até este Pokémon sair de jogo, ele ganhará uma Habilidade com o efeito \"A Fraqueza de cada um dos Pokémon do seu oponente em jogo será Psychic (a quantidade de Fraqueza não muda).\"(você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Bis dieses Pokémon das Spiel verlässt, erhält es eine Fähigkeit mit dem Effekt \"Die Schwäche jedes Pokémon deines Gegners im Spiel ist jetzt Psychic. (Die Höhe der Schwäche ändert sich nicht.)\" (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

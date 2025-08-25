import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		en: "Zeraora VSTAR",
		fr: "Zeraora VSTAR",
		es: "Zeraora V-ASTRO",
		it: "Zeraora V ASTRO",
		pt: "Zeraora V-ASTRO",
		de: "Zeraora VSTAR"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],

	evolveFrom: {
		en: "Zeraora V",
		fr: "Zeraora-V",
		es: "Zeraora V",
		it: "Zeraora-V",
		pt: "Zeraora V",
		de: "Zeraora-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Crushing Beat",
			fr: "Frappe Écrasante",
			es: "Golpe Demoledor",
			it: "Battuta Dirompente",
			pt: "Batida Esmagadora",
			de: "Zermalmender Schlag"
		},

		effect: {
			en: "You may discard a Stadium in play.",
			fr: "Vous pouvez défausser un Stade en jeu.",
			es: "Puedes descartar un Estadio en juego.",
			it: "Puoi scartare una carta Stadio in gioco.",
			pt: "Você pode descartar 1 Estádio em jogo.",
			de: "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		},

		damage: 190
	}, {
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			en: "Lightning Storm Star",
			fr: "Orage d'Éclairs Star",
			es: "Astro Tempestad de Rayos",
			it: "Astro Tempesta Folgorante",
			pt: "Tempestade de Raios Astral",
			de: "Blitzsturm-Stern"
		},

		effect: {
			en: "Choose 1 of your opponent's Pokémon 4 times. (You can choose the same Pokémon more than once.) For each time you chose a Pokémon, do 60 damage to it. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Choisissez quatre fois un Pokémon de votre adversaire. (Vous pouvez choisir le même Pokémon plusieurs fois.) Chaque fois que vous choisissez un Pokémon, infligez-lui 60 dégâts. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Elige 1 de los Pokémon de tu rival 4 veces. (Puedes elegir el mismo Pokémon más de una vez). Por cada vez que elijas 1 Pokémon, hazle 60 puntos de daño a ese Pokémon. Este daño no se ve afectado por Debilidad o Resistencia. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Scegli quattro volte uno dei Pokémon del tuo avversario. Puoi scegliere lo stesso Pokémon più di una volta. Ogni volta che scegli un Pokémon, infliggigli 60 danni. Questi danni non sono influenzati dalla debolezza o dalla resistenza. Non puoi usare più di un Potere ASTRO a partita.",
			pt: "Escolha 1 dos Pokémon do seu oponente 4 vezes (você pode escolher o mesmo Pokémon mais de uma vez). Para cada vez que você escolher um Pokémon, cause 60 pontos de dano a ele. Este dano não é afetado por Fraqueza ou Resistência (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Wähle 4-mal 1 Pokémon deines Gegners. (Du kannst dasselbe Pokémon mehr als einmal wählen.) Jedes Mal, wenn du ein Pokémon wählst, füge ihm 60 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 0,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691772
	}
}

export default card
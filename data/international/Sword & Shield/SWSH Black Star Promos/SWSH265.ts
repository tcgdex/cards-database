import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		'fr-fr': "Zeraora VSTAR",
		'de-de': "Zeraora VSTAR",
		'es-es': "Zeraora V-ASTRO",
		'pt-br': "Zeraora V-ASTRO",
		'it-it': "Zeraora V ASTRO",
		'en-us': "Zeraora VSTAR"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],

	evolveFrom: {
		'fr-fr': "Zeraora-V",
		'de-de': "Zeraora-V",
		'es-es': "Zeraora V",
		'pt-br': "Zeraora V",
		'it-it': "Zeraora-V",
		'en-us': "Zeraora V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Frappe Écrasante",
			'de-de': "Zermalmender Schlag",
			'es-es': "Golpe Demoledor",
			'pt-br': "Batida Esmagadora",
			'it-it': "Battuta Dirompente",
			'en-us': "Crushing Beat"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser un Stade en jeu.",
			'de-de': "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen.",
			'es-es': "Puedes descartar un Estadio en juego.",
			'pt-br': "Você pode descartar 1 Estádio em jogo.",
			'it-it': "Puoi scartare una carta Stadio in gioco.",
			'en-us': "You may discard a Stadium in play."
		},

		damage: 190
	}, {
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Orage d'Éclairs Star",
			'de-de': "Blitzsturm-Stern",
			'es-es': "Astro Tempestad de Rayos",
			'pt-br': "Tempestade de Raios Astral",
			'it-it': "Astro Tempesta Folgorante",
			'en-us': "Lightning Storm Star"
		},

		effect: {
			'fr-fr': "Choisissez quatre fois un Pokémon de votre adversaire. (Vous pouvez choisir le même Pokémon plusieurs fois.) Chaque fois que vous choisissez un Pokémon, infligez-lui 60 dégâts. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'de-de': "Wähle 4-mal 1 Pokémon deines Gegners. (Du kannst dasselbe Pokémon mehr als einmal wählen.) Jedes Mal, wenn du ein Pokémon wählst, füge ihm 60 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			'es-es': "Elige 1 de los Pokémon de tu rival 4 veces. (Puedes elegir el mismo Pokémon más de una vez). Por cada vez que elijas 1 Pokémon, hazle 60 puntos de daño a ese Pokémon. Este daño no se ve afectado por Debilidad o Resistencia. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'pt-br': "Escolha 1 dos Pokémon do seu oponente 4 vezes (você pode escolher o mesmo Pokémon mais de uma vez). Para cada vez que você escolher um Pokémon, cause 60 pontos de dano a ele. Este dano não é afetado por Fraqueza ou Resistência (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'it-it': "Scegli quattro volte uno dei Pokémon del tuo avversario. Puoi scegliere lo stesso Pokémon più di una volta. Ogni volta che scegli un Pokémon, infliggigli 60 danni. Questi danni non sono influenzati dalla debolezza o dalla resistenza. Non puoi usare più di un Potere ASTRO a partita.",
			'en-us': "Choose 1 of your opponent's Pokémon 4 times. (You can choose the same Pokémon more than once.) For each time you chose a Pokémon, do 60 damage to it. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 VSTAR Power in a game.)"
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669840
	}
}

export default card

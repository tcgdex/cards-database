import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		'en-us': "Zeraora VSTAR",
		'fr-fr': "Zeraora VSTAR",
		'es-es': "Zeraora V-ASTRO",
		'it-it': "Zeraora V ASTRO",
		'pt-br': "Zeraora V-ASTRO",
		'de-de': "Zeraora VSTAR"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Zeraora V",
		'fr-fr': "Zeraora-V",
		'es-es': "Zeraora V",
		'it-it': "Zeraora-V",
		'pt-br': "Zeraora V",
		'de-de': "Zeraora-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Crushing Beat",
			'fr-fr': "Frappe Écrasante",
			'es-es': "Golpe Demoledor",
			'it-it': "Battuta Dirompente",
			'pt-br': "Batida Esmagadora",
			'de-de': "Zermalmender Schlag"
		},

		effect: {
			'en-us': "You may discard a Stadium in play.",
			'fr-fr': "Vous pouvez défausser un Stade en jeu.",
			'es-es': "Puedes descartar un Estadio en juego.",
			'it-it': "Puoi scartare una carta Stadio in gioco.",
			'pt-br': "Você pode descartar 1 Estádio em jogo.",
			'de-de': "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		},

		damage: 190
	}, {
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Lightning Storm Star",
			'fr-fr': "Orage d'Éclairs Star",
			'es-es': "Astro Tempestad de Rayos",
			'it-it': "Astro Tempesta Folgorante",
			'pt-br': "Tempestade de Raios Astral",
			'de-de': "Blitzsturm-Stern"
		},

		effect: {
			'en-us': "Choose 1 of your opponent's Pokémon 4 times. (You can choose the same Pokémon more than once.) For each time you chose a Pokémon, do 60 damage to it. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Choisissez quatre fois un Pokémon de votre adversaire. (Vous pouvez choisir le même Pokémon plusieurs fois.) Chaque fois que vous choisissez un Pokémon, infligez-lui 60 dégâts. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Elige 1 de los Pokémon de tu rival 4 veces. (Puedes elegir el mismo Pokémon más de una vez). Por cada vez que elijas 1 Pokémon, hazle 60 puntos de daño a ese Pokémon. Este daño no se ve afectado por Debilidad o Resistencia. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Scegli quattro volte uno dei Pokémon del tuo avversario. Puoi scegliere lo stesso Pokémon più di una volta. Ogni volta che scegli un Pokémon, infliggigli 60 danni. Questi danni non sono influenzati dalla debolezza o dalla resistenza. Non puoi usare più di un Potere ASTRO a partita.",
			'pt-br': "Escolha 1 dos Pokémon do seu oponente 4 vezes (você pode escolher o mesmo Pokémon mais de uma vez). Para cada vez que você escolher um Pokémon, cause 60 pontos de dano a ele. Este dano não é afetado por Fraqueza ou Resistência (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'de-de': "Wähle 4-mal 1 Pokémon deines Gegners. (Du kannst dasselbe Pokémon mehr als einmal wählen.) Jedes Mal, wenn du ein Pokémon wählst, füge ihm 60 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
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


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691772,
				tcgplayer: 478169
			}
		},
	],
}

export default card

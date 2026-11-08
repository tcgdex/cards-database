import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [890],
	set: Set,

	name: {
		'en-us': "Eternatus",
		'fr-fr': "Éthernatos",
		'es-es': "Eternatus",
		'it-it': "Eternatus",
		'pt-br': "Eternatus",
		'de-de': "Endynalos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Dyna-Blast",
			'fr-fr': "Dyna-Explosion",
			'es-es': "Dinaexplosión",
			'it-it': "Esplosione Max",
			'pt-br': "Dinaexplosão",
			'de-de': "Dynamische Detonation"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Fire", "Darkness", "Darkness"],

		name: {
			'en-us': "World Ender",
			'fr-fr': "Fin du Monde",
			'es-es': "Fin del Mundo",
			'it-it': "Finiscimondo",
			'pt-br': "Emissário do Apocalipse",
			'de-de': "Weltenzerstörer"
		},

		effect: {
			'en-us': "Discard a Stadium in play. If you can't, this attack does nothing.",
			'fr-fr': "Défaussez un Stade en jeu. Si vous ne le pouvez pas, cette attaque ne fait rien.",
			'es-es': "Descarta 1 Estadio en juego. Si no puedes, este ataque no hace nada.",
			'it-it': "Scarta una carta Stadio in gioco. Se non puoi, questo attacco non ha effetto.",
			'pt-br': "Descarte um Estádio em jogo. Se não puder fazer isto, este ataque não fará nada.",
			'de-de': "Lege 1 Stadionkarte im Spiel auf den Ablagestapel. Wenn du das nicht machen kannst, hat diese Attacke keine Auswirkungen."
		},

		damage: 230
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794514,
				tcgplayer: 589937
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794514,
				tcgplayer: 589937
			}
		},
	],

	illustrator: "AKIRA EGAWA",

}

export default card

import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [123],
	set: Set,

	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Quick Blow",
			'fr-fr': "Coup d'Poing Éclair",
			'es-es': "Golpe Rápido",
			'it-it': "Colpo Veloce",
			'pt-br': "Golpe Rápido",
			'de-de': "Schnellschlag"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
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
		'en-us': "The large, wickedly sharp scythes on its forearms are truly fearsome weapons. Prey's attempts to flee are unfailingly thwarted by this Pokémon's nimble motions.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658493,
				tcgplayer: 272205
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658493,
				tcgplayer: 272205
			}
		},
	],
}

export default card

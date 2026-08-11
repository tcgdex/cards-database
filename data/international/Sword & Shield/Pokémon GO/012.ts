import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [146],
	set: Set,

	name: {
		'en-us': "Moltres",
		'fr-fr': "Sulfura",
		'es-es': "Moltres",
		'it-it': "Moltres",
		'pt-br': "Moltres",
		'de-de': "Lavados"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Flare Symbol",
			'fr-fr': "Symbole Flamboyant",
			'es-es': "Símbolo Llama",
			'it-it': "Simbolo Fiammeggiante",
			'pt-br': "Símbolo de Labareda",
			'de-de': "Feuer-Symbol"
		},

		effect: {
			'en-us': "Your Basic Fire Pokémon's attacks, except any Moltres, do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques de vos Pokémon Fire de base, à l'exception de celles d'un Sulfura, infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de tus Pokémon Fire Básicos, excepto de los Moltres, hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi dei tuoi Pokémon Base Fire, a eccezione di qualsiasi Moltres, infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques dos seus Pokémon Fire Básicos, exceto por quaisquer Moltres, causam 10 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die Attacken deiner Basis-Fire-Pokémon, außer Lavados, fügen dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Fire Wing",
			'fr-fr': "Aile de Feu",
			'es-es': "Ala Ígnea",
			'it-it': "Alafiamma",
			'pt-br': "Asa de Fogo",
			'de-de': "Feuerflügel"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665246,
				tcgplayer: 276953
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665246,
				tcgplayer: 276953
			}
		},
	],
}

export default card

import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [144],
	set: Set,

	name: {
		'en-us': "Articuno",
		'fr-fr': "Artikodin",
		'es-es': "Articuno",
		'it-it': "Articuno",
		'pt-br': "Articuno",
		'de-de': "Arktos"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Ice Symbol",
			'fr-fr': "Symbole Glaçant",
			'es-es': "Símbolo Hielo",
			'it-it': "Simbolo Ghiacciato",
			'pt-br': "Símbolo de Gelo",
			'de-de': "Eis-Symbol"
		},

		effect: {
			'en-us': "Your Basic Water Pokémon's attacks, except any Articuno, do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques de vos Pokémon Water de base, à l'exception de celles d'un Artikodin, infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de tus Pokémon Water Básicos, excepto de los Articuno, hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi dei tuoi Pokémon Base Water, a eccezione di qualsiasi Articuno, infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques dos seus Pokémon Water Básicos, exceto por quaisquer Articuno, causam 10 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die Attacken deiner Basis-Water-Pokémon, außer Arktos, fügen dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Freezing Wind",
			'fr-fr': "Vent Glaçant",
			'es-es': "Viento Gélido",
			'it-it': "Ventogelido",
			'pt-br': "Vento Gelado",
			'de-de': "Polarwind"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It's said that this Pokémon's beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665255,
				tcgplayer: 276959
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665255,
				tcgplayer: 276959
			}
		},
	],
}

export default card

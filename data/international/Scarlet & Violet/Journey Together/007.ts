import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [549],
	set: Set,

	name: {
		'en-us': "Lilligant",
		'fr-fr': "Fragilady",
		'es-es': "Lilligant",
		'de-de': "Dressella",
		'it-it': "Lilligant",
		'pt-br': "Lilligant",
		'es-mx': "Lilligant"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'de-de': "Lilminip",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'es-mx': "Petilil"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sunny Day",
			'fr-fr': "Zénith",
			'es-es': "Día Soleado",
			'de-de': "Sonnentag",
			'it-it': "Giornodisole",
			'pt-br': "Dia Ensolarado",
			'es-mx': "Día Soleado"
		},

		effect: {
			'en-us': "Attacks used by your {G} Pokémon and {R} Pokémon do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques utilisées par vos Pokémon {G} et vos Pokémon {R} infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques usados por tus Pokémon {G} y Pokémon {R} hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'de-de': "Die von deinen {G}-Pokémon und {R}-Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Gli attacchi usati dai tuoi Pokémon {G} e Pokémon {R} infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques usados pelos seus Pokémon {G} e Pokémon {R} causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Los ataques usados por tus Pokémon Grass y Pokémon Fire hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'de-de': "Rundumangriff",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'es-mx': "Ataque Giratorio"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Jiro Sasumo",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817159,
				tcgplayer: 623434
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817159,
				tcgplayer: 623434
			}
		},
	],
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Lilligant",
		fr: "Fragilady",
		es: "Lilligant",
		de: "Dressella",
		it: "Lilligant",
		pt: "Lilligant",
		'es-mx': "Lilligant"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sunny Day",
			fr: "Zénith",
			es: "Día Soleado",
			de: "Sonnentag",
			it: "Giornodisole",
			pt: "Dia Ensolarado",
			'es-mx': "Día Soleado"
		},

		effect: {
			en: "Attacks used by your Grass Pokémon and Fire Pokémon do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques utilisées par vos Pokémon Grass et vos Pokémon Fire infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques usados por tus Pokémon Grass y Pokémon Fire hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			de: "Die von deinen Grass-Pokémon und Fire-Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Gli attacchi usati dai tuoi Pokémon Grass e Pokémon Fire infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques usados pelos seus Pokémon Grass e Pokémon Fire causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Los ataques usados por tus Pokémon Grass y Pokémon Fire hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			de: "Rundumangriff",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			'es-mx': "Ataque Giratorio"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card

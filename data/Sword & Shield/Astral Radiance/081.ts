import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [701],
	set: Set,

	name: {
		en: "Radiant Hawlucha",
		fr: "Brutalibré Radieux",
		es: "Hawlucha Radiante",
		it: "Hawlucha Lucente",
		pt: "Hawlucha Radiante",
		de: "Strahlendes Resladero"
	},

	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Big Match",
			fr: "Combat Important",
			es: "Gran Combate",
			it: "Incontro Importante",
			pt: "Grande Combate",
			de: "Großes Match"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, your Pokémon's attacks do 30 more damage to your opponent's Active Pokémon VMAX (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est sur votre Banc, les attaques de vos Pokémon infligent 30 dégâts supplémentaires au Pokémon-VMAX Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Mientras este Pokémon esté en tu Banca, los ataques de tus Pokémon hacen 30 puntos de daño más al Pokémon VMAX Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Fintanto che questo Pokémon è nella tua panchina, gli attacchi dei tuoi Pokémon infliggono 30 danni in più al Pokémon-VMAX attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Enquanto este Pokémon estiver no seu Banco, os ataques dos seus Pokémon causarão 30 pontos de dano a mais ao Pokémon VMAX Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, fügen die Attacken deiner Pokémon dem Aktiven Pokémon-VMAX deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Spiral Kick",
			fr: "Coup'd Pied en Spirale",
			es: "Patada Espiral",
			it: "Spiralcalcio",
			pt: "Chute Espiral",
			de: "Drehtritt"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658690,
		tcgplayer: 272282
	}
}

export default card

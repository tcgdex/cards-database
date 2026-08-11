import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [144],
	set: Set,

	name: {
		'fr-fr': "Artikodin",
		'en-us': "Articuno",
		'es-es': "Articuno",
		'it-it': "Articuno",
		'pt-br': "Articuno",
		'de-de': "Arktos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Flottaison Glaciale",
			'en-us': "Ice Float",
			'es-es': "Flotación Glacial",
			'it-it': "Salvagente Glaciale",
			'pt-br': "Gelo à Deriva",
			'de-de': "Eisfloß"
		},

		effect: {
			'fr-fr': "Si au moins une Énergie {W} est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			'en-us': "If this Pokémon has any {W} Energy attached, it has no Retreat Cost.",
			'es-es': "Si este Pokémon tiene alguna Energía {W} unida, no tiene ningún Coste de Retirada.",
			'it-it': "Se questo Pokémon ha delle Energie {W} assegnate, non ha costo di ritirata.",
			'pt-br': "Se este Pokémon tiver alguma Energia {W} ligada a ele, não terá custo de Recuo.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {W}-Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			'fr-fr': "Blizzard",
			'en-us': "Blizzard",
			'es-es': "Ventisca",
			'it-it': "Bora",
			'pt-br': "Nevasca",
			'de-de': "Blizzard"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon can control ice at will. Articuno is said to live in snowy mountains riddled with permafrost.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733739,
				tcgplayer: 516707,
				cardtrader: 261225
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733739,
				tcgplayer: 516707,
				cardtrader: 261225
			}
		},
	],

	illustrator: "chibi",

	
}

export default card

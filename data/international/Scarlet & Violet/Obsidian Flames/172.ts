import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [508],
	set: Set,

	name: {
		'fr-fr': "Mastouffe",
		'en-us': "Stoutland",
		'es-es': "Stoutland",
		'it-it': "Stoutland",
		'pt-br': "Stoutland",
		'de-de': "Bissbark"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Ponchien",
		'en-us': "Herdier",
		'es-es': "Herdier",
		'it-it': "Herdier",
		'pt-br': "Herdier",
		'de-de': "Terribark"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Panique Mangeouille",
			'en-us': "Chomp Chomp Panic",
			'es-es': "Pánico Ñam Ñam",
			'it-it': "Masticapanico",
			'pt-br': "Pânico Nhoc Nhoc",
			'de-de': "Mampfpanik"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 50 damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			'es-es': "Este ataque hace 50 puntos de daño por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Croc Aiguisé",
			'en-us': "Sharp Fang",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Stoutland is immensely proud of its impressive moustache. It's said that moustache length is what determines social standing among this species.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725252,
				tcgplayer: 509713,
				cardtrader: 256068
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725252,
				tcgplayer: 509713,
				cardtrader: 256068
			}
		},
	],

	illustrator: "Keisin",

	
}

export default card

import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'es-es': "Azumarill",
		'it-it': "Azumarill",
		'pt-br': "Azumarill",
		'de-de': "Azumarill"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 100,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill",
		'es-es': "Marill",
		'it-it': "Marill",
		'pt-br': "Marill",
		'de-de': "Marill"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Régénération α",
				'en-us': "α Recovery",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
				'en-us': "When this Pokémon is healed, double the amount healed.",
				'es-es': "{title}: Cuando este Pokémon sea curado, dobla la cantidad curada.",
				'it-it': "{title}: Quando curi questo Pokémon, raddoppia la quantità di danni che stai curando.",
				'pt-br': "{title}: Quando este Pokémon for curado, dobre a quantidade curada.",
				'de-de': "{title}: Wenn dieses Pokémon geheilt wird, verdoppele die geheilten Schadenspunkte."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Tail Rap",
				'fr-fr': "Frap'Keu",
				'es-es': "Coleada",
				'it-it': "Mano-Coda",
				'pt-br': "Batida de Cauda",
				'de-de': "Schweifklopfen"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dwindling Wave",
				'fr-fr': "Vague Faiblissante",
				'es-es': "Ola Menguante",
				'it-it': "Onda Evanescente",
				'pt-br': "Onda Decrescente",
				'de-de': "Schwindende Welle"
			},
			effect: {
				'en-us': "This attack does 100 damage minus 10 damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 100 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 100 puntos de daño menos 10 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 100 danni meno 10 per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 100 de danos menos 10 de danos para cada contador de danos neste Pokémon.",
				'de-de': "Dieser Angriff fügt 100 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "100-",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The bubble-like pattern on its stomach helps it camouflage itself when it's in the water.",
	},

	thirdParty: {
		cardmarket: 273634,
		tcgplayer: 96002
	}
}

export default card

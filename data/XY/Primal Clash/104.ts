import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill",
		es: "Azumarill",
		it: "Azumarill",
		pt: "Azumarill",
		de: "Azumarill"
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
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		it: "Marill",
		pt: "Marill",
		de: "Marill"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Régénération α",
				en: "α Recovery",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
				en: "When this Pokémon is healed, double the amount healed.",
				es: "{title}: Cuando este Pokémon sea curado, dobla la cantidad curada.",
				it: "{title}: Quando curi questo Pokémon, raddoppia la quantità di danni che stai curando.",
				pt: "{title}: Quando este Pokémon for curado, dobre a quantidade curada.",
				de: "{title}: Wenn dieses Pokémon geheilt wird, verdoppele die geheilten Schadenspunkte."
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
				en: "Tail Rap",
				fr: "Frap'Keu",
				es: "Coleada",
				it: "Mano-Coda",
				pt: "Batida de Cauda",
				de: "Schweifklopfen"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Esse ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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
				en: "Dwindling Wave",
				fr: "Vague Faiblissante",
				es: "Ola Menguante",
				it: "Onda Evanescente",
				pt: "Onda Decrescente",
				de: "Schwindende Welle"
			},
			effect: {
				en: "This attack does 100 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 100 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 100 puntos de daño menos 10 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 100 danni meno 10 per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 100 de danos menos 10 de danos para cada contador de danos neste Pokémon.",
				de: "Dieser Angriff fügt 100 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
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



}

export default card

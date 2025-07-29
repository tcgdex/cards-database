import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Bibarel",
		fr: "Castorno",
		es: "Bibarel",
		it: "Bibarel",
		pt: "Bibarel",
		de: "Bidifas"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		400,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
		es: "Bidoof",
		it: "Bidoof",
		pt: "Bidoof",
		de: "Bidiza"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Headbutt",
				fr: "Double Coup d'Boule",
				es: "Doble Cabezazo",
				it: "Doppia Bottintesta",
				pt: "Cabeçada Dupla",
				de: "Doppelte Kopfnuss"
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
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypno Headbutt",
				fr: "Hypno Coup d'Boule",
				es: "Cabezazo Hipnótico",
				it: "Bottintesta Ipnotica",
				pt: "Cabeçada Hipnótica",
				de: "Hypnokopfstoß"
			},
			effect: {
				en: "You may do 30 more damage. If you do, this Pokémon is now Asleep.",
				fr: "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, ce Pokémon est maintenant Endormi.",
				es: "Puedes hacer 30 puntos de daño más. Si lo haces, este Pokémon pasa a estar Dormido.",
				it: "Puoi infliggere 30 danni in più. Se lo fai, questo Pokémon viene addormentato.",
				pt: "Você pode causar 30 de danos adicionais. Se você fizer isso, este Pokémon ficará Adormecido.",
				de: "Du kannst mit diesem Angriff 30 weitere Schadenspunkte zufügen. Wenn du das machst, schläft dieses Pokémon jetzt."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281444
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
		es: "Scrafty",
		it: "Scrafty",
		pt: "Scrafty",
		de: "Irokex"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		560,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
		es: "Scraggy",
		it: "Scraggy",
		pt: "Scraggy",
		de: "Zurrokex"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				es: "Patada Baja",
				it: "Colpo Basso",
				pt: "Rasteira",
				de: "Fußkick"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Machine Gun Headbutt",
				fr: "Mitraille-Tête",
				es: "Golpe Cabeza Incesante",
				it: "Cozzata Mitra",
				pt: "Cabeçada Metralhadora",
				de: "Trommelfeuer-Kopfnuss"
			},
			effect: {
				en: "Flip 3 coins. This attack does 50 damage times the number of heads. This Pokémon is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
				es: "Lanza 3 monedas. Este ataque hace 50 puntos de daño por cada cara. Este Pokémon pasa a estar Confundido.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa. Questo Pokémon viene confuso.",
				pt: "Jogue 3 moedas. Esse ataque causa 50 de danos vezes o número de caras. Este Pokémon agora está Confuso.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu. Dieses Pokémon ist jetzt verwirrt."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281731,
		tcgplayer: 92244
	}
}

export default card

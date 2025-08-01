import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [40],

	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		it: "Wigglytuff",
		pt: "Wigglytuff",
		de: "Knuddeluff"
	},

	illustrator: "Lee HyunJung",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff",
		de: "Pummeluff"
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleep Pulse",
				fr: "Pouls Dodo",
				es: "Pulso Soñoliento",
				it: "Sonnopulsar",
				pt: "Pulso Sonolento",
				de: "Schlafimpuls"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Smash",
				fr: "Double Broiement",
				es: "Golpe Doble",
				it: "Colpo Duplice",
				pt: "Bordoada Dupla",
				de: "Doppelstoß"
			},
			effect: {
				en: "Flip 2 coins. This attack does 90 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
			},
			damage: "90×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "When it gets angry, it inhales with all its might, and its body gradually inflates. Sometimes they can grow 20 times larger!"
	},

	thirdParty: {
		cardmarket: 483219
	}
}

export default card

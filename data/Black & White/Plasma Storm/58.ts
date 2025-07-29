import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
		es: "Weezing",
		it: "Weezing",
		pt: "Weezing",
		de: "Smogmog"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Aftermath",
				fr: "Boom Final",
				es: "Resquicio",
				it: "Scoppio",
				pt: "Resultado",
				de: "Finalschlag"
			},
			effect: {
				en: "When this Pokémon is Knocked Out by damage from an opponent’s attack, discard the top 3 cards of your opponent’s deck.",
				fr: "Lorsque ce Pokémon est mis K.O. par les dégâts d’une attaque de votre adversaire, défaussez les 3 cartes du dessus du deck de votre adversaire.",
				es: "Cuando este Pokémon quede Fuera de Combate por el daño de un ataque de tu rival, descarta las 3 primeras cartas de la baraja de tu rival.",
				it: "Quando questo Pokémon viene messo K.O. dai danni inflitti da un attacco del tuo avversario, scarta le prime tre carte del mazzo del tuo avversario.",
				pt: "Quando esse Pokémon for Nocauteado por danos causados pelo ataque de um oponente, descarte os 3 cards de cima do baralho do seu oponente.",
				de: "Wenn dieses Pokémon durch Schaden eines gegnerischen Angriffs kampfunfähig wird, lege die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Smogbank",
				fr: "Smog Envahissant",
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280798
	}
}

export default card

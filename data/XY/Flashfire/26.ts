import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Walrein",
		fr: "Kaimorse",
		es: "Walrein",
		it: "Walrein",
		pt: "Walrein",
		de: "Walraisa"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
		es: "Sealeo",
		it: "Sealeo",
		pt: "Sealeo",
		de: "Seejong"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Powder Snow",
				fr: "Poudreuse",
				es: "Nieve Polvo",
				it: "Polneve",
				pt: "Neve em Pó",
				de: "Pulverschnee"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Tusk",
				fr: "Défenses Puissantes",
				es: "Gran Colmillo",
				it: "Zannagrande",
				pt: "Presa Grande",
				de: "Großer Stoßzahn"
			},
			effect: {
				en: "This attack does 120 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 120 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 120 puntos de daño menos 10 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 120 danni meno 10 per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 120 de danos menos 10 de danos para cada contador de danos neste Pokémon.",
				de: "Dieser Angriff fügt 120 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "120-",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 281509,
		tcgplayer: 91159
	}
}

export default card

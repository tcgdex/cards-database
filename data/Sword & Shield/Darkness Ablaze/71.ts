import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Granbull",
		fr: "Granbull",
		es: "Granbull",
		it: "Granbull",
		pt: "Granbull",
		de: "Granbull"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
		es: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull",
		de: "Snubbull"
	},

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Jaw Lock",
				fr: "Croque Fort",
				es: "Presa Maxilar",
				it: "Morsostretto",
				pt: "Trava de Mandíbula",
				de: "Fesselbiss"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Headbutt Bounce",
				fr: "Culbute Surprise",
				es: "Bote Cabezazo",
				it: "Rimbalzo Bottintesta",
				pt: "Cabeçada Ricochete",
				de: "Abrupter Kopfstoß"
			},

			damage: 130,

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
		en: "Although it’s popular with young people, Granbull is timid and sensitive, so it’s totally incompetent as a watchdog."
	}
}

export default card

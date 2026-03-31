import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Spinarak",
		fr: "Mimigal",
		es: "Spinarak",
		de: "Webarak",
		it: "Spinarak",
		pt: "Spinarak"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		167
	],
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass"
			],
			name: {
				en: "Gooey Thread",
				fr: "Fil Gluant",
				es: "Hilo Pegajoso",
				de: "Klebriger Faden",
				it: "Tela Appiccicosa",
				pt: "Fio Pegajoso"
			},
			damage: "10",
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
			}
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Katsunori Sato",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684397,
		cardmarket: 877413
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [769],
	set: Set,

	name: {
		en: "Sandygast",
		fr: "Bacabouh",
		es: "Sandygast",
		it: "Sandygast",
		pt: "Sandygast",
		de: "Sankabuh"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Corner",
			fr: "Coinçage",
			es: "Arrinconar",
			it: "Trappola",
			pt: "Quina",
			de: "Bedrängen"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		en: "Grudges of the dead have possessed a mound of sand and become a Pokémon. Sandygast is fond of the shovel on its head.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682146,
				tcgplayer: 451753
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682146,
				tcgplayer: 451753
			}
		},
	],
}

export default card

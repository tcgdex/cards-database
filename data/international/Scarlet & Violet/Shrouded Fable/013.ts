import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Cut",
			'fr-fr': "Coupe",
			'es-es': "Corte",
			'it-it': "Taglio",
			'pt-br': "Cortar",
			'de-de': "Zerschneider"
		},

		damage: 10
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Beset",
			'fr-fr': "Piégeage",
			'es-es': "Acorralar",
			'it-it': "Importunare",
			'pt-br': "Atazanar",
			'de-de': "Einengen"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "Krgc",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780903,
				tcgplayer: 560323
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780903,
				tcgplayer: 560323
			}
		},
	],
}

export default card

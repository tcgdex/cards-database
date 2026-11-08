import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [108],
	set: Set,

	name: {
		'fr-fr': "Excelangue",
		'en-us': "Lickitung",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'pt-br': "Lickitung",
		'de-de': "Schlurp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Langue Ligotante",
			'en-us': "Tongue-Tied",
			'es-es': "Traba-Lengua",
			'it-it': "Legalingua",
			'pt-br': "Nó de Língua",
			'de-de': "Zungenzügel"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't attack.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "Bug Pokémon are Lickitung's main food source. This Pokémon paralyzes its prey with a lick from its long tongue, then swallows the prey whole.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733703,
				tcgplayer: 516677,
				cardtrader: 261128
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733703,
				tcgplayer: 516677,
				cardtrader: 261128
			}
		},
	],

	illustrator: "Saya Tsuruta",

	
}

export default card

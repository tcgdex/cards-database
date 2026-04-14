import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		'es-mx': "Sneasel",
		de: "Sniebel",
		it: "Sneasel",
		pt: "Sneasel"
	},

	illustrator: "Krgc",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Cut",
			fr: "Coupe",
			es: "Corte",
			'es-mx': "Corte",
			de: "Zerschneider",
			it: "Taglio",
			pt: "Cortar"
		},

		damage: 10
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Beset",
			fr: "Piégeage",
			es: "Acorralar",
			'es-mx': "Acorralar",
			de: "Einengen",
			it: "Importunare",
			pt: "Atazanar"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869655,
			tcgplayer: 675856
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870207,
			tcgplayer: 676888
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870208,
			tcgplayer: 677028
		}
	},
],
}

export default card

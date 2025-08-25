import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [674],
	set: Set,

	name: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Mina Nakai",

	description: {
		en: "Wanting to make sure it's taken seriously, Pancham's always giving others a glare. But if it's not focusing, it ends up smiling."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Raised Bad",
			fr: "Mauvaise Éducation",
			de: "Verzogen",
			es: "Malcriado",
			pt: "Maldade de Berço",
			it: "Maleducato"
		},

		effect: {
			en: "Search your deck for up to 2 {D} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {D}, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 {D}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {D} y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 cartas de Energia {D} no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo fino a due carte Energia {D} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			de: "Schmetterkick",
			es: "Patada Destrucción",
			pt: "Chute Poderoso",
			it: "Calcio Esplosivo"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582777,
		tcgplayer: 253363
	}
}

export default card
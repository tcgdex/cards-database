import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [437],
	set: Set,

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Evolution Jammer",
			'fr-fr': "Bloqueur d'Évolution",
			'es-es': "Interferente de Evolución",
			'it-it': "Evolviblocco",
			'pt-br': "Atolador de Evolução",
			'de-de': "Entwicklungsstörer"
		},

		effect: {
			'en-us': "During your opponent's next turn, they can't play any Pokémon from their hand to evolve their Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de Pokémon de sa main pour faire évoluer ses Pokémon.",
			'es-es': "Durante el próximo turno de tu rival, este no puede jugar ningún Pokémon de su mano para hacer evolucionar a sus Pokémon.",
			'it-it': "Durante il suo prossimo turno, il tuo avversario non può giocare i Pokémon che ha in mano per far evolvere i suoi Pokémon.",
			'pt-br': "Durante o próximo turno do seu oponente, ele não poderá jogar nenhum Pokémon da mão dele para evoluir os Pokémon dele.",
			'de-de': "Dein Gegner kann während seines nächsten Zuges keine Pokémon aus seiner Hand spielen, um seine Pokémon zu entwickeln."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'pt-br': "Super-raio Psíquico",
			'de-de': "Super-Psischlag"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760699,
				tcgplayer: 542813
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760699,
				tcgplayer: 542813
			}
		},
	],

	illustrator: "Katsunori Sato",

}

export default card
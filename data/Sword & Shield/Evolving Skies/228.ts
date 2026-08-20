import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Cresselia",
		fr: "Cresselia",
		es: "Cresselia",
		it: "Cresselia",
		pt: "Cresselia",
		de: "Cresselia"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Toyste Beach",
	dexId: [488],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Crescent Glow",
			fr: "Lueur Lunule",
			de: "Mondsichelleuchten"
		},

		effect: {
			en: "Search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. If you go second and it's your first turn, instead search for up to 3 Psychic Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie , puis attachez-la à l'un de vos Pokémon. Si vous jouez en second et que c'est votre premier tour, cherchez jusqu'à 3 cartes Énergie  à la place, puis attachez-les à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 {P}-Energiekarte und lege sie an 1 deiner Pokémon an. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, durchsuche dein Deck stattdessen nach bis zu 3 {P}-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Photon Laser",
			fr: "Laser à Photons",
			de: "Photonenlaser"
		},

		effect: {
			en: "If you have at least 5 Energy in play, this attack does 90 more damage.",
			fr: "Si vous avez au moins 5 Énergies en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			de: "Wenn du mindestens 5 Energiekarten im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "Those who sleep holding Cresselia's feather are assured of joyful dreams. It is said to represent the crescent moon.",
		de: "Hält man eine seiner Federn, träumt man süß. Manche glauben, es sei die Verkörperung der Mondsichel."
	},

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574286,
				tcgplayer: 246803
			}
		},
	],
}

export default card

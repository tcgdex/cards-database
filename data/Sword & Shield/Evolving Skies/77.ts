import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Gourgeist",
		fr: "Banshitrouye",
		es: "Gourgeist",
		it: "Gourgeist",
		pt: "Gourgeist",
		de: "Pumpdjinn"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",
	illustrator: "Megumi Higuchi",

	attacks: [{
		name: {
			en: "Pandemonium",
			fr: "Pandémonium",
			es: "Pandemonio",
			it: "Pandemonio",
			pt: "Pandemonium",
			de: "Pandämonium"
		},

		effect: {
			en: "Reveal the top 6 cards of your deck. This attack does 60 damage for each Psychic Pokémon you find there. Then, shuffle those Pokémon back into your deck and discard the other cards.",
			fr: "Montrez les 6 cartes du dessus de votre deck. Cette attaque inflige 60 dégâts pour chaque Pokémon Psychic que vous y trouvez. Mélangez ensuite ces Pokémon avec votre deck et défaussez les autres cartes.",
			es: "Enseña las 6 primeras cartas de tu baraja. Este ataque hace 60 puntos de daño por cada Pokémon Psychic que encuentres entre ellas. Después, pon esos Pokémon de nuevo en tu baraja, baraja todas las cartas y descarta el resto de las cartas que enseñaste.",
			it: "Mostra le prime sei carte del tuo mazzo. Questo attacco infligge 60 danni per ogni Pokémon Psychic presente tra esse. Poi rimischia quei Pokémon nel tuo mazzo e scarta le altre carte.",
			pt: "Reveal the top 6 cards of your deck. This attack does 60 damage for each Psychic Pokémon you find there. Then, shuffle those Pokémon back into your deck and discard the other cards.",
			de: "Zeige deinem Gegner die obersten 6 Karten deines Decks. Diese Attacke fügt für jedes Psychic-Pokémon, das du dort findest, 60 Schadenspunkte zu. Mische anschließend jene Pokémon zurück in dein Deck und lege die anderen Karten auf deinen Ablagestapel."
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	evolveFrom: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
		es: "Pumpkaboo",
		it: "Pumpkaboo",
		pt: "Pumpkaboo",
		de: "Irrbis"
	},

	description: {
		en: "In the darkness of a new-moon night, Gourgeist will come knocking. Whoever answers the door will be swept off to the afterlife."
	},

	dexId: [711]
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Pairs of Toucannon are considered symbols of companionship, as these Pokémon will raise the temperature of their beaks to warm each other.",
		de: "Tukanon-Pärchen erhöhen die Temperatur ihrer Schnäbel, um sich gegenseitig zu wärmen. Daher gelten sie als Symbol für Harmonie."
	},

	name: {
		en: "Toucannon",
		fr: "Bazoucan",
		es: "Toucannon",
		'es-mx': "Toucannon",
		de: "Tukanon"
	},

	illustrator: "Masako Tomii",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [733],
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Trumbeak"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Aerial Draw",
			de: "Höhenzug"
		},

		effect: {
			en: "Once during your turn, you may draw 1 card.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Ziehe 1 Karte."
		}
	}],

	attacks: [{
		name: {
			en: "Feather Rondo",
			de: "Federrondo"
		},

		cost: ["Colorless"],

		damage: "60+",

		effect: {
			en: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte mehr zu."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895852,
				tcgplayer: 704825
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895852,
				tcgplayer: 704825
			}
		},
	],
}

export default card

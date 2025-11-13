import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [584],
	set: Set,

	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
		es: "Vanilluxe",
		it: "Vanilluxe",
		pt: "Vanilluxe",
		de: "Gelatwino"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
		es: "Vanillish",
		it: "Vanillish",
		pt: "Vanillish",
		de: "Gelatroppo"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Frigid Room",
			fr: "Zone Glaciale",
			es: "Zona Glacial",
			it: "Glaciozona",
			pt: "Aposento Gélido",
			de: "Kühler Raum"
		},

		effect: {
			en: "Your opponent's Pokémon that have 40 HP or less remaining can't attack.",
			fr: "Les Pokémon de votre adversaire auxquels il reste 40 PV ou moins ne peuvent pas attaquer.",
			es: "Los Pokémon de tu rival a los que les queden 40 PS o menos no pueden atacar.",
			it: "I Pokémon del tuo avversario che hanno 40 PS o meno rimanenti non possono attaccare.",
			pt: "Os Pokémon do seu oponente que têm PS restante de 40 ou menos não podem atacar.",
			de: "Die Pokémon deines Gegners, die 40 oder weniger verbleibende KP haben, können nicht angreifen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Icicle Missile",
			fr: "Missile Stalactite",
			es: "Misil Carámbano",
			it: "Missilghiaccio",
			pt: "Míssil Gélido",
			de: "Eiszapfenrakete"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Nelnal",

	thirdParty: {
		cardmarket: 740525
	}
}

export default card
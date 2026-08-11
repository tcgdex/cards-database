import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [584],
	set: Set,

	name: {
		'en-us': "Vanilluxe",
		'fr-fr': "Sorbouboul",
		'es-es': "Vanilluxe",
		'it-it': "Vanilluxe",
		'pt-br': "Vanilluxe",
		'de-de': "Gelatwino"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
		'es-es': "Vanillish",
		'it-it': "Vanillish",
		'pt-br': "Vanillish",
		'de-de': "Gelatroppo"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Frigid Room",
			'fr-fr': "Zone Glaciale",
			'es-es': "Zona Glacial",
			'it-it': "Glaciozona",
			'pt-br': "Aposento Gélido",
			'de-de': "Kühler Raum"
		},

		effect: {
			'en-us': "Your opponent's Pokémon that have 40 HP or less remaining can't attack.",
			'fr-fr': "Les Pokémon de votre adversaire auxquels il reste 40 PV ou moins ne peuvent pas attaquer.",
			'es-es': "Los Pokémon de tu rival a los que les queden 40 PS o menos no pueden atacar.",
			'it-it': "I Pokémon del tuo avversario che hanno 40 PS o meno rimanenti non possono attaccare.",
			'pt-br': "Os Pokémon do seu oponente que têm PS restante de 40 ou menos não podem atacar.",
			'de-de': "Die Pokémon deines Gegners, die 40 oder weniger verbleibende KP haben, können nicht angreifen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Icicle Missile",
			'fr-fr': "Missile Stalactite",
			'es-es': "Misil Carámbano",
			'it-it': "Missilghiaccio",
			'pt-br': "Míssil Gélido",
			'de-de': "Eiszapfenrakete"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "People believe this Pokémon formed when two Vanillish stuck together. Its body temperature is roughly 21 degrees Fahrenheit.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740525,
				tcgplayer: 523654,
				cardtrader: 265127
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 785466
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740525,
				tcgplayer: 523654,
				cardtrader: 265127
			}
		},
	],

	illustrator: "Nelnal",

	
}

export default card

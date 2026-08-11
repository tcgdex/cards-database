import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [957],
	set: Set,

	name: {
		'en-us': "Tinkatink",
		'fr-fr': "Forgerette",
		'es-es': "Tinkatink",
		'it-it': "Tinkatink",
		'pt-br': "Tinkatink",
		'de-de': "Forgita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Boundless Power",
			'fr-fr': "Puissance Illimitée",
			'es-es': "Poder Ilimitado",
			'it-it': "Potere Incontenibile",
			'pt-br': "Poder Ilimitado",
			'de-de': "Unbegrenzte Kraft"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 40
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
		'en-us': "This Pokémon pounds iron scraps together to make a hammer. It will remake the hammer again and again until it's satisfied with the result.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740575,
				tcgplayer: 523749,
				cardtrader: 265185
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740575,
				tcgplayer: 523749,
				cardtrader: 265185
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card

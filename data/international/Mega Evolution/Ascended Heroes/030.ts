import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
		'es-es': "Pignite",
		'es-mx': "Pignite",
		'de-de': "Ferkokel",
		'it-it': "Pignite",
		'pt-br': "Pignite"
	},

	evolveFrom: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
		'es-es': "Tepig",
		'es-mx': "Tepig",
		'de-de': "Floink",
		'it-it': "Tepig",
		'pt-br': "Tepig",
	},

	illustrator: "Aliya Chen",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [499],
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Super Singe",
			'fr-fr': "Super Roussi",
			'es-es': "Superquemadura",
			'es-mx': "Superquemadura",
			'de-de': "Super-Versengung",
			'it-it': "Super Scottata",
			'pt-br': "Superchamuscada"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	description: {
		'en-us': "The more it eats, the more fuel it has to make the fire in its stomach stronger. This fills it with even more power.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869641,
			tcgplayer: 675842
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870186,
			tcgplayer: 676877
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870185,
			tcgplayer: 677017
		}
	},
],
}

export default card

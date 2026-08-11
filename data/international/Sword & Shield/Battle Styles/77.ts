import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [620],
	set: Set,

	name: {
		'en-us': "Mienshao",
		'fr-fr': "Shaofouine",
		'es-es': "Mienshao",
		'it-it': "Mienshao",
		'pt-br': "Mienshao",
		'de-de': "Wie-Shu"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
		'es-es': "Mienfoo",
		'it-it': "Mienfoo",
		'pt-br': "Mienfoo",
		'de-de': "Lin-Fu"
	},

	attacks: [{
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'it-it': "Botta",
			'pt-br': "Pancada",
			'de-de': "Klaps"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Spinning Whip",
			'fr-fr': "Fouet Tournant",
			'es-es': "Látigo Giratorio",
			'it-it': "Frustata Rotante",
			'pt-br': "Chicote Giratório",
			'de-de': "Wirbelpeitsche"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused. Shuffle this Pokémon and all attached cards into your deck.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Mélangez dans votre deck ce Pokémon et toutes les cartes attachées.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Mische dieses Pokémon und alle angelegten Karten in dein Deck."
		},

		damage: 90,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "When Mienshao lets out a bizarre wail, you're in danger. A flurry of kicks and chops too fast to see is about to be unleashed!"
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 527670,
				tcgplayer: 234253
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 527670,
				tcgplayer: 234253
			}
		},
	],
}

export default card

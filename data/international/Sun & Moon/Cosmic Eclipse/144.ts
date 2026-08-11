import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 50,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Doll Swap",
				'fr-fr': "Échange Poupées",
				'es-es': "Intercambio Muñeco",
				'it-it': "Scambio di Bambole",
				'pt-br': "Troca de Boneco",
				'de-de': "Puppentausch"
			},
			effect: {
				'en-us': "Put this Pokémon and all cards attached to it into your hand. If you do, you may play Lillie’s Poké Doll from your hand as your new Active Pokémon.",
				'fr-fr': "Placez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main. Dans ce cas, vous pouvez jouer Poké Poupée de Lilie de votre main comme nouveau Pokémon Actif.",
				'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu mano. Si lo haces, puedes jugar 1 carta de Poké Muñeco de Lylia de tu mano como tu nuevo Pokémon Activo.",
				'it-it': "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate. Se lo fai, puoi giocare Poké Bambola di Lylia dalla tua mano come tuo nuovo Pokémon attivo.",
				'pt-br': "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão. Se fizer isto, você poderá jogar Pokéboneco da Lílian como seu novo Pokémon Ativo.",
				'de-de': "Nimm dieses Pokémon und alle an es angelegten Karten auf deine Hand. Wenn du das machst, kannst du Lillys Poképuppe als dein neues Aktives Pokémon aus deiner Hand spielen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They're popular, but they're rare. Trainers who show them off recklessly may be targeted by thieves.",
	},

	thirdParty: {
		cardmarket: 408364,
		tcgplayer: 201188
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Gothitelle",
		'fr-fr': "Sidérella",
		'es-es': "Gothitelle",
		'it-it': "Gothitelle",
		'pt-br': "Gothitelle",
		'de-de': "Morbitesse"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		576,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gothorita",
		'fr-fr': "Mesmérella",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Magic Room",
				'fr-fr': "Zone Magique",
				'es-es': "Zona Mágica",
				'it-it': "Magicozona",
				'pt-br': "Sala Mágica",
				'de-de': "Magieraum"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent can’t play any Item cards from his or her hand.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Objet de sa main.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, tu rival no puede jugar ninguna carta de Objeto de su mano.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo avversario non può giocare carte Strumento dalla sua mano.",
				'pt-br': "Desde que este Pokémon seja seu Pokémon Ativo, seu oponente não poderá jogar cards de Item da mão dele ou dela.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, kann dein Gegner keine Itemkarten von seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Madkinesis",
				'fr-fr': "Mentalisme",
			},
			effect: {
				'en-us': "Does 20 more damage for each Psychic Energy attached to this Pokémon.",
				'fr-fr': "Inflige 20 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Starry skies thousands of light-years away are visible in the space distorted by their intense psychic power.",
	},

	thirdParty: {
		cardmarket: 280012,
		tcgplayer: 85851
	}
}

export default card

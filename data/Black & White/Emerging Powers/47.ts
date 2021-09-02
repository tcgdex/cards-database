import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
		es: "Gothitelle",
		it: "Gothitelle",
		pt: "Gothitelle",
		de: "Morbitesse"
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
		en: "Gothorita",
		fr: "Mesmérella",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Magic Room",
				fr: "Zone Magique",
				es: "Zona Mágica",
				it: "Magicozona",
				pt: "Sala Mágica",
				de: "Magieraum"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can’t play any Item cards from his or her hand.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Objet de sa main.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, tu rival no puede jugar ninguna carta de Objeto de su mano.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo avversario non può giocare carte Strumento dalla sua mano.",
				pt: "Desde que este Pokémon seja seu Pokémon Ativo, seu oponente não poderá jogar cards de Item da mão dele ou dela.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, kann dein Gegner keine Itemkarten von seiner Hand spielen."
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
				en: "Madkinesis",
				fr: "Mentalisme",
			},
			effect: {
				en: "Does 20 more damage for each Psychic Energy attached to this Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
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



}

export default card

import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Metagross",
		'fr-fr': "Métalosse",
		'es-es': "Metagross",
		'it-it': "Metagross",
		'pt-br': "Metagross",
		'de-de': "Metagross"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'de-de': "Metang"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Magnetic Warp",
				'fr-fr': "Distorsion Magnétique",
				'es-es': "Curvatura Magnética",
				'it-it': "Distorsione Magnetica",
				'pt-br': "Deformação Magnética",
				'de-de': "Magnetverzerrung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may switch your Active Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon Actif avec l'un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes cambiar tu Pokémon Activo por 1 de tus Pokémon en Banca. Si lo haces, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare il tuo Pokémon attivo con uno della tua panchina. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode trocar o seu Pokémon Ativo por um que estiver no seu Banco. Se fizer isso, seu oponente troca o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Cannon",
				'fr-fr': "Canon de Fer",
				'es-es': "Cañón de Hierro",
				'it-it': "Metalcannone",
				'pt-br': "Canhão de Ferro",
				'de-de': "Eherne Kanone"
			},
			effect: {
				'en-us': "You may discard all Metal Energy attached to this Pokémon. If you do, this attack does 80 more damage.",
				'fr-fr': "Vous pouvez défausser toutes les Énergies Metal attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Puedes descartar todas las Energías Metal unidas a este Pokémon. Si lo haces, este ataque hace 80 puntos de daño más.",
				'it-it': "Puoi scartare tutte le Energie Metal assegnate a questo Pokémon. Se lo fai, questo attacco infligge 80 danni in più.",
				'pt-br': "Você pode descartar toda a Energia Metal ligada a este Pokémon. Se fizer isso, este ataque causará 80 de danos adicionais.",
				'de-de': "Du kannst alle an dieses Pokémon angelegten Metal-Energien auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Metang combined to form it. With four brains, it has the intelligence of a supercomputer.",
	},

	thirdParty: {
		cardmarket: 284230,
		tcgplayer: 101471
	}
}

export default card

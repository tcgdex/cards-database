import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
		'es-es': "Croconaw",
		'it-it': "Croconaw",
		'pt-br': "Croconaw",
		'de-de': "Tyracroc"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		159,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Plunge",
				'fr-fr': "Plongeon",
				'es-es': "Meterse de Lleno",
				'it-it': "Tuffo",
				'pt-br': "Mergulhar",
				'de-de': "Steilsprung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is on your Bench, you may move all Energy from your Active Pokémon to this Pokémon. If you do, switch it with your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez déplacer toute l’Énergie de votre Pokémon Actif vers ce Pokémon. Dans ce cas, échangez-le avec votre Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes mover todas las Energías de tu Pokémon Activo a este Pokémon. Si lo haces, cámbialo por tu Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi spostare tutta l’Energia dal tuo Pokémon attivo a questo Pokémon. Se lo fai, scambialo con il tuo Pokémon attivo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver no seu Banco, você pode mover todas as Energias do seu Pokémon Ativo para este Pokémon. Se fizer isto, troque-o pelo seu Pokémon Ativo.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du, wenn sich dieses Pokémon auf deiner Bank befindet, alle Energien von deinem Aktiven Pokémon auf dieses Pokémon verschieben. Wenn du das machst, tausche es gegen dein Aktives Pokémon aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "If it loses a fang, a new one grows back in its place. There are always 48 fangs lining its mouth.",
	},

	thirdParty: {
		cardmarket: 302157,
		tcgplayer: 146672
	}
}

export default card

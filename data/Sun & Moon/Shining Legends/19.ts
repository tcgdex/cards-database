import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Croconaw",
		fr: "Crocrodil",
		es: "Croconaw",
		it: "Croconaw",
		pt: "Croconaw",
		de: "Tyracroc"
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
		en: "Totodile",
		fr: "Kaiminus",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Plunge",
				fr: "Plongeon",
				es: "Meterse de Lleno",
				it: "Tuffo",
				pt: "Mergulhar",
				de: "Steilsprung"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may move all Energy from your Active Pokémon to this Pokémon. If you do, switch it with your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez déplacer toute l’Énergie de votre Pokémon Actif vers ce Pokémon. Dans ce cas, échangez-le avec votre Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes mover todas las Energías de tu Pokémon Activo a este Pokémon. Si lo haces, cámbialo por tu Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi spostare tutta l’Energia dal tuo Pokémon attivo a questo Pokémon. Se lo fai, scambialo con il tuo Pokémon attivo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver no seu Banco, você pode mover todas as Energias do seu Pokémon Ativo para este Pokémon. Se fizer isto, troque-o pelo seu Pokémon Ativo.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du, wenn sich dieses Pokémon auf deiner Bank befindet, alle Energien von deinem Aktiven Pokémon auf dieses Pokémon verschieben. Wenn du das machst, tausche es gegen dein Aktives Pokémon aus."
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
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
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

	thirdParty: {
		cardmarket: 302157
	}
}

export default card

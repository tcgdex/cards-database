import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Nine Temptations",
				fr: "Neuf Tentations",
				es: "Nueve Tentaciones",
				it: "Lusinghe Volpine",
				pt: "Nove Tentações",
				de: "Verlockende Schweife"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard 2 Fire Energy cards from your hand. If you do, switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser 2 cartes Énergie Fire de votre main. Dans ce cas, échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 2 cartas de Energía Fire de tu mano. Si lo haces, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare due carte Energia Fire che hai in mano. Se lo fai, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 2 cartas de Energia Fire da sua mão. Se fizer isto, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 2 Fire-Energiekarten aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Tail",
				fr: "Queue de Flammes",
				es: "Cola de Fuego",
				it: "Codafiamma",
				pt: "Cauda de Chamas",
				de: "Flammenschweif"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 368948
	}
}

export default card

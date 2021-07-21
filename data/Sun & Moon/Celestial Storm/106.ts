import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Salamence",
		fr: "Drattak",
		es: "Salamence",
		it: "Salamence",
		pt: "Salamence",
		de: "Brutalanda"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dragon Wind",
				fr: "Vent de Dragon",
				es: "Viento Dragón",
				it: "Dragovento",
				pt: "Vento de Dragão",
				de: "Drachenwind"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon, once during your turn (before your attack), you may switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes cambiar 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo, você poderá trocar 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist, kannst du einmal während deines Zuges (bevor du angreifst) 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
				es: "Garra Dragón",
				it: "Dragartigli",
				pt: "Garra de Dragão",
				de: "Drachenklaue"
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card

import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
		es: "Vanilluxe",
		it: "Vanilluxe",
		pt: "Vanilluxe",
		de: "Gelatwino"
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		584,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Slippery Soles",
				fr: "Sol Verglacé",
				es: "Suelas Deslizantes",
				it: "Antisdrucciolo",
				pt: "Solas Escorregadias",
				de: "Rutschige Sohlen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch your Active Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon Actif avec 1 de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif avec 1 de ses Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes cambiar a tu Pokémon Activo por 1 de tus Pokémon en Banca. Si lo haces, tu rival cambia a su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare il tuo Pokémon attivo con uno della tua panchina. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode trocar seu Pokémon Ativo por 1 dos seus Pokémon no Banco. Se você fizer isso, seu oponente trocará o Pokémon Ativo dele ou dela por 1 dos respectivos Pokémon no Banco.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
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
				en: "Crushing Ice",
				fr: "Brise-Glace",
			},
			effect: {
				en: "Does 10 more damage for each Colorless in the Defending Pokémon's Retreat Cost.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Colorless dans le coût de Retraite du Pokémon Défenseur.",
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

	retreat: 2,



}

export default card

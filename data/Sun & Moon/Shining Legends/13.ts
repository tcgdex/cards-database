import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax",
		es: "Volcarona",
		it: "Volcarona",
		pt: "Volcarona",
		de: "Ramoth"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		637,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Heat Cyclone",
				fr: "Cyclone de Chaleur",
				es: "Ciclón de Calor",
				it: "Ciclone Rovente",
				pt: "Ciclone Ardente",
				de: "Heißer Wirbel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
				es: "Explosión de Calor",
				it: "Caldobomba",
				pt: "Raio de Calor",
				de: "Hitzestoß"
			},

			damage: 60,

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
		cardmarket: 302151,
		tcgplayer: 146666
	}
}

export default card

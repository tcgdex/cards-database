import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Beldum",
		fr: "Terhal",
		es: "Beldum",
		it: "Beldum",
		pt: "Beldum",
		de: "Tanhel"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		374,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Conductive Body",
				fr: "Corps Conducteur",
				es: "Cuerpo Conductor",
				it: "Lama Furente",
				pt: "Corpo Condutor",
				de: "Leitender Körper"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, its Retreat Cost is Colorless less for each Beldum on your Bench.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, son Coût de Retraite est diminué de Colorless pour chaque Terhal sur votre Banc.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, su Coste de Retirada es de Colorless menos por cada Beldum en tu Banca.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, il suo costo di ritirata è ridotto di Colorless per ogni Beldum nella tua panchina.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, seu custo de Recuo será Colorless a menos para cada Beldum no seu Banco.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, verringern sich seine Rückzugskosten um Colorless für jedes Tanhel auf deiner Bank."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 10,

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
	retreat: 2,



}

export default card

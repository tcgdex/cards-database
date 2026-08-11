import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [903],
	set: Set,

	name: {
		'en-us': "Hisuian Sneasler",
		'fr-fr': "Farfurex de Hisui",
		'es-es': "Sneasler de Hisui",
		'it-it': "Sneasler di Hisui",
		'pt-br': "Sneasler de Hisui",
		'de-de': "Hisui-Snieboss"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Hisuian Sneasel",
		'fr-fr': "Farfuret de Hisui",
		'es-es': "Sneasel de Hisui",
		'it-it': "Sneasel di Hisui",
		'pt-br': "Sneasel de Hisui",
		'de-de': "Hisui-Sniebel"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Carry and Climb",
			'fr-fr': "Attrape et Grimpe",
			'es-es': "Cargar y Escalar",
			'it-it': "Piglia e Arrampicati",
			'pt-br': "Pegar e Escalar",
			'de-de': "Tragen und klettern"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
			'fr-fr': "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif est diminué de ColorlessColorless.",
			'es-es': "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon Activo es de ColorlessColorless menos.",
			'it-it': "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon attivo è ridotto di ColorlessColorless.",
			'pt-br': "Enquanto este Pokémon estiver no seu Banco, o custo de Recuo do seu Pokémon Ativo será ColorlessColorless a menos.",
			'de-de': "Solange sich dieses Pokémon auf deiner Bank befindet, verringern sich die Rückzugskosten deines Aktiven Pokémon um ColorlessColorless."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Because of Sneasler's virulent poison and daunting physical prowess, no other species could hope to best it on the frozen highlands. Preferring solitude, this species does not form packs.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658725,
				tcgplayer: 272294
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658725,
				tcgplayer: 272294
			}
		},
	],
}

export default card

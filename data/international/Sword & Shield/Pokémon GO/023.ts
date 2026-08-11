import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Ice Beam",
			'fr-fr': "Laser Glace",
			'es-es': "Rayo Hielo",
			'it-it': "Geloraggio",
			'pt-br': "Raio Congelante",
			'de-de': "Eisstrahl"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'pt-br': "Surfar",
			'de-de': "Surfer"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665661,
				tcgplayer: 276957
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665661,
				tcgplayer: 276957
			}
		},
	],
}

export default card

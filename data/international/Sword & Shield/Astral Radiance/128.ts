import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [432],
	set: Set,

	name: {
		'en-us': "Purugly",
		'fr-fr': "Chaffreux",
		'es-es': "Purugly",
		'it-it': "Purugly",
		'pt-br': "Purugly",
		'de-de': "Shnurgarst"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
		'es-es': "Glameow",
		'it-it': "Glameow",
		'pt-br': "Glameow",
		'de-de': "Charmian"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Body Slam",
			'fr-fr': "Plaquage",
			'es-es': "Golpe Cuerpo",
			'it-it': "Corposcontro",
			'pt-br': "Pancada Corporal",
			'de-de': "Bodyslam"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Slashing Claw",
			'fr-fr': "Griffe Taillante",
			'es-es': "Garra Cuchillazo",
			'it-it': "Artigli Laceranti",
			'pt-br': "Garra Cortadora",
			'de-de': "Schlitzende Klaue"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "To make itself appear intimidatingly beefy, it tightly cinches its waist with its twin tails.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658789,
				tcgplayer: 272367
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658789,
				tcgplayer: 272367
			}
		},
	],
}

export default card
